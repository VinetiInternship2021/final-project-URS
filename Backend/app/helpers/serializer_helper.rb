module SerializerHelper

 def self.serialize(type,name, opt={})
 	case type

 	when :AvailabilitySerializer
   	AvailabilitySerializer.new(name, opt).serializable_hash
    when :RoomSerializer
   	RoomSerializer.new(name, opt).serializable_hash
    when :RoomBookingSerializer
   	RoomBookingSerializer.new(name, opt).serializable_hash
    when :EventSerializer
   	EventSerializer.new(name, opt).serializable_hash  
   	when :EventBookingSerializer
   	EventBookingSerializer.new(name, opt).serializable_hash	
   	when :UserSerializer
   	UserSerializer.new(name, opt).serializable_hash
   	
   end
 end
end

