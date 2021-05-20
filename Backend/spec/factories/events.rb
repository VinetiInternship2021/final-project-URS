# frozen_string_literal: true

FactoryBot.define do
  factory :event do
    seats_limit { 1 }
    subject { 'MyString' }
    description { 'MyText' }
    event_title { 'MyString' }
    event_type { 1 }
    room_booking { nil }
  end
end
