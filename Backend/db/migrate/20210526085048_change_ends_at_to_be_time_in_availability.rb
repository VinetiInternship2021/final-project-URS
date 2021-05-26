class ChangeEndsAtToBeTimeInAvailability < ActiveRecord::Migration[6.1]
  def change
  	change_column :availabilities, :ends_at, :time
  end
end
