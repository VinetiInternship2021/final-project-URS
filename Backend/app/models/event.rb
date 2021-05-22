# frozen_string_literal: true

class Event < ApplicationRecord
  belongs_to :room_booking
  has_many :event_bookings
  enum event_type: %i[conference lecture]
  validates :event_type, inclusion: { in: event_types.keys }
  validates :seats_limit, :numericality =>
            { :only_integer => true, :greater_than => 0}
             # :greater_than => self.room_booking.available_seats}
  validates_associated :event_bookings
  validates :room_booking, presence: true
end
