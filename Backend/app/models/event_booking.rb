# frozen_string_literal: true

class EventBooking < ApplicationRecord
  belongs_to :event
  belongs_to :user
  validates :event_id, :user_id, presence: true
  validates_associated :user
end
