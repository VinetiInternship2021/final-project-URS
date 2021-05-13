require "rails_helper"

RSpec.describe RoomBookingsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/room_bookings").to route_to("room_bookings#index")
    end

    it "routes to #show" do
      expect(get: "/room_bookings/1").to route_to("room_bookings#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/room_bookings").to route_to("room_bookings#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/room_bookings/1").to route_to("room_bookings#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/room_bookings/1").to route_to("room_bookings#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/room_bookings/1").to route_to("room_bookings#destroy", id: "1")
    end
  end
end
