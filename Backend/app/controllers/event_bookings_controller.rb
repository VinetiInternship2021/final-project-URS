# frozen_string_literal: true

class EventBookingsController < ApplicationController
  before_action :set_event_booking, only: %i[show update destroy]
  before_action :set_user, only: %i[current_event_bookings create]
  before_action :set_event, only: %i[create ]


  # GET /event_bookings
  def current_event_bookings
    @event_bookings = @current_user.event_bookings
    render json: SerializerHelper::serialize(:EventBookingSerializer, @event_bookings)
  end

  # def index_students
  #   @event_bookings = EventBooking.joins(:user).where(role: 'student')
  #   render json: { event_bookings: @event_bookings }
  # end

  # POST /event_bookings
  def create
   # options = { include: [:event] }
    @event_booking = @current_user.event_bookings.new
    @event_booking.event_id = @event.id

    if @event_booking.save
      @event.room_booking.available_seats -=1
      if @event.room_booking.available_seats > 0
        @event.room_booking.save
      else render json: @room_booking.errors, status: :unprocessable_entity
      end
       render json: SerializerHelper::serialize(:EventBookingSerializer, @event_booking), status: :created, location: @event_booking

    else
      render json: @event_booking.errors, status: :unprocessable_entity
    end
  end

  # DELETE /event_bookings/1
  def destroy
    @event_booking.destroy
  end

  private

  def set_user
    @user = current_user
  end
  def set_event
    @event = Event.find(params[:event_id])
  end
  # Use callbacks to share common setup or constraints between actions.
  def set_event_booking
    @event_booking = EventBooking.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def event_booking_params
    params.fetch(:event_booking, {})
  end
end
