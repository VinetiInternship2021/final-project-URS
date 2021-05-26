# frozen_string_literal: true

class RoomBookingsController < ApplicationController
  before_action :set_room_booking, only: %i[show update destroy]

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
    @room_booking = current_user.room_bookings.new(room_booking_params)
    @room = Room.where(:id => params[:room_id]).first
    @room_booking.available_seats = @room.seats_count
    if @room_booking.save
      render json: SerializerHelper::serialize(:RoomBookingSerializer, @room_booking), status: :created, location: @room_booking

    else
      render json: @room_booking.errors, status: :unprocessable_entity
    end
  end

  # DELETE /room_bookings/1
  def destroy
    authorize @room_booking
    @room_booking.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_room_booking
    @room_booking = RoomBooking.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def room_booking_params
    params.require(:room_booking).permit( :starts_at, :ends_at, :room_id)
  end
end
