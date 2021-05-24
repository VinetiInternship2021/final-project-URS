# frozen_string_literal: true

FactoryBot.define do
  factory :room_booking do
    available_seats { 1 }
    starts_at { '2021-05-07 18:23:11' }
    ends_at { '2021-05-07 18:23:11' }
    user { 1 }
    room { 1 }
  end
end
