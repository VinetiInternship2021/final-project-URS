class UserSerializer
  include JSONAPI::Serializer
  attributes :id,:name, :email,:role,:verified,:active
end
