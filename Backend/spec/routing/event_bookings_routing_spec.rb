# frozen_string_literal: true

require 'rails_helper'

RSpec.describe EventBookingsController, type: :routing do
  describe 'routing' do
    # it "routes to #index" do
    #   expect(get: "/event_bookings").to route_to("event_bookings#index")
    # end

    it 'routes to #show' do
      expect(get: '/event_bookings/1').to route_to('event_bookings#show', id: '1')
    end

    # it "routes to #create" do
    #   expect(post: "/event_bookings").to route_to("event_bookings#create")
    # end

    it 'routes to #update via PUT' do
      expect(put: '/event_bookings/1').to route_to('event_bookings#update', id: '1')
    end

    it 'routes to #update via PATCH' do
      expect(patch: '/event_bookings/1').to route_to('event_bookings#update', id: '1')
    end

    it 'routes to #destroy' do
      expect(delete: '/event_bookings/1').to route_to('event_bookings#destroy', id: '1')
    end
  end
end
