# frozen_string_literal: true

class Room < ApplicationRecord
  has_many :availabilities, dependent: :destroy
  has_many :room_bookings, dependent: :destroy
  enum room_type: %i[conference class]
  validates :room_type, inclusion: { in: room_types.keys }
  validates :seats_count, presence: true
  scope :filter_room, ->(room_type) { where(room_type: room_type) }
end
