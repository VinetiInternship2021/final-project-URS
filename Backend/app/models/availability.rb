class Availability < ApplicationRecord
  belongs_to :room, dependent: :destroy
 #validates :starts_at, :ends_at, :day_of_week, :room_id presence: true
  validate :end_date_after_start_date

  private
  def end_date_after_start_date
    return if ends_at.blank? || starts_at.blank?

    if ends_at < starts_at
      errors.add(:ends_at, "must be after the start date")
    end
 end

   def starting_time
    starts_at.strftime("%FT%T")
  end
    def ending_time
    ends_at.strftime("%FT%T")
  end
 

end
