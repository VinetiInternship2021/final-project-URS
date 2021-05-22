module SerializerHelper

 def self.serialize(type,name, opt={})
 	case type

 	when :AvailabilitySerializer
   	AvailabilitySerializer.new(name, opt).serializable_hash
    when :RoomSerializer
   	RoomSerializer.new(name, opt).serializable_hash
   	
   end
 end
end

