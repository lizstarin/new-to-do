class DaysController < ApplicationController

  def index
    @days = Day.all
    Day.create(:date => Date.today) if @days.empty?

    def collect_floating_tasks
      floating_tasks = []

      @days.each do |d|
        if d.date < Date.today
          d.tasks.each do |t|
            floating_tasks << t
          end

          d.destroy
        end
      end

      floating_tasks
    end

    tasks = collect_floating_tasks
    sorted_days = @days.sort_by { |el| el.date }

    unless tasks.empty?
      unless sorted_days.first.date == Date.today
        today = Day.create(:date => Date.today)
      else
        today = sorted_days.first
      end

      tasks.each do |t|
        t.update_attributes(:day_id => today.id)
      end
    end

    respond_to do |format|
      format.html { render :index }
      format.json { render :json => @days }
    end
  end

  def new
    @day = Day.new
  end

  def create
    @day = Day.new(params[:day])
    @day.save
    redirect_to root_url
  end


end