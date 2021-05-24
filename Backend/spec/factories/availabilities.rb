# frozen_string_literal: true

FactoryBot.define do
  factory :availability do
    starts_at { '2021-05-07 18:21:07' }
    ends_at { '2021-05-07 18:21:07' }
    day_of_week { 2 }
    holiday { false }
    room { 1 }
  end
end
