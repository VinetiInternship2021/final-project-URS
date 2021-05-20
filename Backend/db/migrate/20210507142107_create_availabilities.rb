# frozen_string_literal: true

class CreateAvailabilities < ActiveRecord::Migration[6.1]
  def change
    create_table :availabilities do |t|
      t.time :starts_at
      t.time :ends_at
      t.datetime :day_of_week
      t.boolean :holiday
      t.belongs_to :room, null: false, foreign_key: true

      t.timestamps
    end
  end
end
