class UserSerializer
  include JSONAPI::Serializer
  attributes :id,:name, :email,:role
  has_many :room_bookings
  has_many :event_bookings
end
