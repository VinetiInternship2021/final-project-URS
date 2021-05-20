# frozen_string_literal: true

class CreateEventBookings < ActiveRecord::Migration[6.1]
  def change
    create_table :event_bookings do |t|
      t.belongs_to :event, null: false, foreign_key: true
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
