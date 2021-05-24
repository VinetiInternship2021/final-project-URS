# frozen_string_literal: true

class Availability < ApplicationRecord
  belongs_to :room, dependent: :destroy
  validate :end_date_after_start_date
  enum day_of_week: %i[monday tuesday wednesday thursday friday saturday sunday]
  validates :day_of_week, inclusion: { in: day_of_weeks.keys }
  validates_associated :room

  private

  def end_date_after_start_date
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
