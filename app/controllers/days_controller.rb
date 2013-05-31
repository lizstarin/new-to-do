class DaysController < ApplicationController

  def index
    @days = Day.all

    respond_to do |format|
      format.html { render :index }
      format.json { render :json => @days }
    end
  end

end