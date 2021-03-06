# frozen_string_literal: true

class EventBookingsController < ApplicationController
  before_action :set_event_booking, only: %i[show update destroy]
  before_action :set_event, only: %i[create index]

  def index
    options = { include: [:users] }
    @event_bookings = EventBooking.all
    authorize @event_bookings
    @event_bookings = @event_bookings.where(:event_id => params[:event_id])
    render json: SerializerHelper::serialize(:EventBookingSerializer, @event_bookings, options)
  end

  # GET /event_bookings
  def current_event_bookings
    @event_bookings = current_user.event_bookings
    render json: SerializerHelper::serialize(:EventBookingSerializer, @event_bookings)
  end

  # POST /event_bookings
  def create
    @event_booking = current_user.event_bookings.new
    authorize @event_booking
    @event_booking.event_id = @event.id
    if @event_booking.save
      @event.room_booking.available_seats -= 1
      if @event.room_booking.available_seats > 0
        @event.room_booking.save
      else render json: @room_booking.errors, status: :unprocessable_entity
      end
      render json: SerializerHelper::serialize(:EventBookingSerializer, @event_booking, options), status: :created, location: @event_booking

    else
      render json: @event_booking.errors, status: :unprocessable_entity
    end
  end

  # DELETE /event_bookings/1
  def destroy
    @event_booking.destroy
  end

  private

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
