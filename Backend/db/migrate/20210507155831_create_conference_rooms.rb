class CreateConferenceRooms < ActiveRecord::Migration[6.1]
  def change
    create_table :conference_rooms do |t|

      t.timestamps
    end
  end
end
