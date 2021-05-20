class RoomSerializer
  include JSONAPI::Serializer
  attributes :seats_count, :room_type
end
