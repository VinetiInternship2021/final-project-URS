class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.integer :seats_limit
      t.string :subject
      t.text :description
      t.string :event_title
      t.string :event_type
      t.belongs_to :room_booking, null: false, foreign_key: true

      t.timestamps
    end
  end
end
