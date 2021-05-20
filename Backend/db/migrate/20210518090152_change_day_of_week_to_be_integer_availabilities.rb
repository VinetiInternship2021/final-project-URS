# frozen_string_literal: true

class ChangeDayOfWeekToBeIntegerAvailabilities < ActiveRecord::Migration[6.1]
  def change
    change_column :availabilities, :day_of_week, :integer, default: 0
  end
end
