class Task < ActiveRecord::Base
  attr_accessible :name, :due_date, :day_id

  belongs_to :day
end