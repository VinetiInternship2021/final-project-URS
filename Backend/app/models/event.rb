# frozen_string_literal: true

class Event < ApplicationRecord
  belongs_to :room_booking
  has_many :event_bookings
  enum event_type: %i[conference lecture]
  validates :event_type, inclusion: { in: event_types.keys }
  validates_associated :event_bookings
  validates :room_booking, presence: true
end
