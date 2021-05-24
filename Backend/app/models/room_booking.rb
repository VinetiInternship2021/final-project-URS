# frozen_string_literal: true

class RoomBooking < ApplicationRecord
  belongs_to :user, dependent: :destroy
  belongs_to :room, dependent: :destroy
  has_one :event
  validates_associated :user, :room
  validates :available_seats, :numericality =>
            { :only_integer => true, :greater_than => 0 }

  validates :user_id, :room_id, :starts_at, :ends_at, presence: true
  validate :ends_at_after_starts_at

  private

  def ends_at_after_starts_at
    return if ends_at.blank? || starts_at.blank?

    errors.add(:ends_at, 'must be after the start date') if ends_at < starts_at
  end

  def starting_time
    starts_at.strftime('%FT%T')
  end

  def ending_time
    ends_at.strftime('%FT%T')
  end
end
