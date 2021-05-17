class Room < ApplicationRecord 
	has_many :availabilities
	has_many :room_bookings
	enum room_type: ["conference", "lecture"]
	validates :room_type, inclusion: {in: room_types.keys}
	validates :seats_count, presence: true
	validates_associated :availabilities 
	scope :filter_room, -> (room_type){where(:room_type => room_type) }

end
