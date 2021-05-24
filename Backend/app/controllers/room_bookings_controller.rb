# frozen_string_literal: true

class RoomBookingsController < ApplicationController
  before_action :set_room_booking, only: %i[show update destroy]
  before_action :set_user, only: %i[create]

  # GET /room_bookings
  def index
    @room_bookings = RoomBooking.all
    render json: SerializerHelper::serialize(:RoomBookingSerializer, @room_bookings)
  end

  # GET /room_bookings/1
  def show
    render json: SerializerHelper::serialize(:RoomBookingSerializer, @room_booking)
  end

  # POST /room_bookings
  def create
    @room_booking = @current_user.room_bookings.new(room_booking_params)

    if @room_booking.save
      render json: SerializerHelper::serialize(:RoomBookingSerializer, @room_booking), status: :created, location: @room_booking

    else
      render json: @room_booking.errors, status: :unprocessable_entity
    end
  end

  # DELETE /room_bookings/1
  def destroy
    @current_user.room_booking.destroy
  end

  private

  def set_user
    @user = current_user
  end

  # Use callbacks to share common setup or constraints between actions.
  def set_room_booking
    @room_booking = RoomBooking.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def room_booking_params
    params.require(:room_booking).permit(:available_seats, :starts_at, :ends_at, :room_id)
  end
end
