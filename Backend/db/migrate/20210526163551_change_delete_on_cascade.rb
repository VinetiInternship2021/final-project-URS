class ChangeDeleteOnCascade < ActiveRecord::Migration[6.1]
    def change
  	remove_foreign_key :availabilities, :rooms
  	add_foreign_key :availabilities, :rooms, on_delete: :cascade

  	remove_foreign_key :event_bookings, :events
  	add_foreign_key :event_bookings, :events, on_delete: :cascade

  	remove_foreign_key :event_bookings, :users
  	add_foreign_key :event_bookings, :users

  	remove_foreign_key :events, :room_bookings
  	add_foreign_key :events, :room_bookings, on_delete: :cascade

  	remove_foreign_key :room_bookings, :rooms
  	add_foreign_key :room_bookings, :rooms, on_delete: :cascade

  	remove_foreign_key :room_bookings, :users
  	add_foreign_key :room_bookings, :users
  end
end
