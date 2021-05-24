class RoomBookingSerializer
  include JSONAPI::Serializer
  attributes :available_seats, :starts_at, :ends_at, :user_id, :room_id
  belongs_to :user
  belongs_to :room
  has_one :event
end
