class AvailabilitySerializer
  include JSONAPI::Serializer
  attributes :starts_at, :ends_at, :day_of_week, :holiday, :room_id
  belongs_to :room
end
