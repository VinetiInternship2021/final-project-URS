class CreateClassRooms < ActiveRecord::Migration[6.1]
  def change
    create_table :class_rooms do |t|

      t.timestamps
    end
  end
end
