class ChangeTypeToBeIntegerRooms < ActiveRecord::Migration[6.1]
  def change
  	  	  change_column :rooms, :room_type, :integer, default: 0

  end
end
