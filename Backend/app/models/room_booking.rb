class RoomBooking < ApplicationRecord
  belongs_to :user, dependent: :destroy
  belongs_to :room, dependent: :destroy
  has_one :event
  validates_associated :user, :room, :event
  validates :user_id, :room_id, :starts_at, :ends_at, presence: true 

end
