# frozen_string_literal: true

class EventBookingsController < ApplicationController
  before_action :set_event_booking, only: %i[show update destroy]
  before_action :set_user, only: %i[index create]

  # GET /event_bookings
  def index
    @event_bookings = @current_user.event_bookings
    #  @event_bookings = EventBooking.where( id: current_user.id)

    render json: @event_bookings
  end

  def index_students
    @event_bookings = EventBooking.joins(:user).where(role: 'student')
    render json: { event_bookings: @event_bookings }
  end

  # GET /event_bookings/1
  def show
    render json: @event_booking
  end

  # POST /event_bookings
  def create
    @event_booking = @current_user.event_bookings.new(event_booking_params)

    if @event_booking.save
      render json: @event_booking, status: :created, location: @event_booking
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

  # Use callbacks to share common setup or constraints between actions.
  def set_event_booking
    @event_booking = EventBooking.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def event_booking_params
    params.fetch(:event_booking, {})
  end
end
