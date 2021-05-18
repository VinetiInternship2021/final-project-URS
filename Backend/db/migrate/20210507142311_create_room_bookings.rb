# frozen_string_literal: true

class CreateRoomBookings < ActiveRecord::Migration[6.1]
  def change
    create_table :room_bookings do |t|
      t.integer :available_seats
      t.datetime :starts_at
      t.datetime :ends_at
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :room, null: false, foreign_key: true

      t.timestamps
    end
  end
end
