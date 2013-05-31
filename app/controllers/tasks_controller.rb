class TasksController < ApplicationController

  def index
    @tasks = Task.where(:day_id => params[:day_id])

    respond_to do |format|
      format.html { render :index }
      format.json { render :json => @tasks }
    end
  end

  # def new
  #   @task = Task.new
  # end

  def create
    @task = Task.new(params[:task])
    @task.save
    redirect_to root_url
  end

  def destroy

  end

end