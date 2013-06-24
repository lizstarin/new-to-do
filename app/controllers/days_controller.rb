class DaysController < ApplicationController

  def index
    @days = Day.all
    Day.create(:date => Date.today) if @days.empty?

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