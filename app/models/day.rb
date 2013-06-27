class Day < ActiveRecord::Base
  attr_accessible :date

  has_many :tasks

  validates :date, :uniqueness => true
end