class RoomBooking < ApplicationRecord
  belongs_to :user, dependent: :destroy
  belongs_to :room, dependent: :destroy
  has_one :event
  validates_associated :user, :room, :event
  validates :user_id, :room_id, :starts_at, :ends_at, presence: true 
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
