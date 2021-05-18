# frozen_string_literal: true

FactoryBot.define do
  factory :room do
    seats_count { 1 }
    room_type { 1 }
  end
end
