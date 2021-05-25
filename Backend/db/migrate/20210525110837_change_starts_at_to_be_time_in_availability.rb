class ChangeStartsAtToBeTimeInAvailability < ActiveRecord::Migration[6.1]
  def change
  	change_column :availabilities, :starts_at, :time
  end
end
