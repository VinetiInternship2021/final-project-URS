class EventBookingsController < ApplicationController
  before_action :set_event_booking, only: [:show, :update, :destroy]

  # GET /event_bookings
  def index
    @event_bookings = EventBooking.all

    render json: @event_bookings
  end

  # GET /event_bookings/1
  def show
    render json: @event_booking
  end

  # POST /event_bookings
  def create
    @event_booking = EventBooking.new(event_booking_params)

    if @event_booking.save
      render json: @event_booking, status: :created, location: @event_booking
    else
      render json: @event_booking.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /event_bookings/1
  def update
    if @event_booking.update(event_booking_params)
      render json: @event_booking
    else
      render json: @event_booking.errors, status: :unprocessable_entity
    end
  end

  # DELETE /event_bookings/1
  def destroy
    @event_booking.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_event_booking
      @event_booking = EventBooking.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def event_booking_params
      params.fetch(:event_booking, {})
    end
end
