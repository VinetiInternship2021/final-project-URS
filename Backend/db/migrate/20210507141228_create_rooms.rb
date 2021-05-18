# frozen_string_literal: true

class CreateRooms < ActiveRecord::Migration[6.1]
  def change
    create_table :rooms do |t|
      t.integer :seats_count
      t.string :room_type

      t.timestamps
    end
  end
end
