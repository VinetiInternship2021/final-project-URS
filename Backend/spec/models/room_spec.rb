# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Room, type: :model do
  before(:all) do
    @room = create(:room)
  end

  it "is valid with valid attributes" do
    expect(@room).to be_valid
  end

  it "is not valid without a seats_count" do
    room = Room.new(seats_count: nil)
    expect(room).to_not be_valid
  end
end
