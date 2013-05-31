class AddDayId < ActiveRecord::Migration
  def change
    add_column :tasks, :day_id, :integer
  end
end
