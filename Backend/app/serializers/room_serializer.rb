class RoomSerializer
  include JSONAPI::Serializer
  attributes :seats_count, :room_type
  has_many :availabilities
  has_many :room_bookings
end
