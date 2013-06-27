class Task < ActiveRecord::Base
  attr_accessible :name, :due_date, :day_id, :completed

  belongs_to :day

  # validates :name, :day_id, :completed, :presence => true
end