# frozen_string_literal: true

class EventsController < ApplicationController
  before_action :set_event, only: %i[show update destroy]
  before_action :set_room_booking, only: %i[create]

  # GET /events
  def index
    @events = Event.all
    unless params[:event_type].blank?
      @events = @events.where(:event_type => params[:event_type])
    end
    render json: SerializerHelper::serialize(:EventSerializer, @events)
  end

  # GET /events/1
  def show
    render json: SerializerHelper::serialize(:EventSerializer, @event)
  end

  # POST rooms/:id/events
  def create
    options = { include: [:room_booking] }
    @event = Event.new(event_params)
    authorize @event
    @event.room_booking_id = @room_booking.id
    if @event.save
      render json: SerializerHelper::serialize(:EventSerializer, @event, options), status: :created, location: @event
    else
      render json: @event.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /events/1
  def update
    authorize @event
    if @event.update(event_params)
      render json: SerializerHelper::serialize(:EventSerializer, @event)
    else
      render json: @event.errors, status: :unprocessable_entity
    end
  end

  # DELETE /events/1
  def destroy
   authorize @event
   @event.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_event
    @event = Event.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def event_params
    params.require(:event).permit(:seats_limit, :event_type, :subject, :description, :event_title)
  end

  def set_room_booking
    @room_booking = RoomBooking.find(params[:room_booking_id])
  end
end
