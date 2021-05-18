# frozen_string_literal: true

class Event < ApplicationRecord
  belongs_to :room_booking
  has_many :event_bookings
  validates_associated :event_bookings
  validates :room_booking, presence: true
end
