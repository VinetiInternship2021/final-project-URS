# frozen_string_literal: true

require 'rails_helper'

RSpec.describe RoomBooking, type: :model do
  before(:all) do
    @room_booking = create(:room_booking)
  end
  # it { should belong_to(:user) }

  # it "is valid with valid attributes" do
  #   expect(@room_booking).to be_valid
  # end

  # it "is not valid without a user_id" do
  # room_booking2 = RoomBooking.new(user: nil)
  # expect(room_booking2).to_not be_valid
  # end

  #  it "is not valid without a room_idS" do
  # room_booking2 = RoomBooking.new(room: nil)
  # expect(room_booking2).to_not be_valid
  # end
end
