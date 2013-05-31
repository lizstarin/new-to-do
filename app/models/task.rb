class Task < ActiveRecord::Base
  attr_accessible :name, :due_date

  belongs_to :day
end