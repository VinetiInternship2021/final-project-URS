class EventBookingSerializer
  include JSONAPI::Serializer
  attributes :event_id, :user_id
  belongs_to :event
  belongs_to :user
end
