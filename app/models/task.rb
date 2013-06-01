class Task < ActiveRecord::Base
  attr_accessible :name, :due_date, :day_id, :completed

  belongs_to :day
end