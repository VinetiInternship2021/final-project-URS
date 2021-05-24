class EventSerializer
  include JSONAPI::Serializer
  attributes :seats_limit, :subject, :description, :event_title, :event_type, :room_booking_id
  belongs_to :room_booking
  has_many :event_bookings
end
