# frozen_string_literal: true

class RoomsController < ApplicationController
  before_action :set_room,
                only: %i[show update destroy create_availability update_availability index_availabilities]

  # GET /rooms
  def index
    @rooms = Room.all
    @rooms = Room.filter_room(params[:room_type]) unless params[:room_type].blank?
    render json: @rooms
  end

  def index_availabilities
    @availabilities = @room.availabilities.all
    render json: { availabilities: @availabilities }
  end

  # GET /rooms/1
  def show
    render json: @room
  end

  # POST /rooms
  def create
    @room = Room.new(room_params)

    if @room.save
      render json: @room, status: :created, location: @room
    else
      render json: @room.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /rooms/1
  def update
    if @room.update(room_params)
      render json: @room
    else
      render json: @room.errors, status: :unprocessable_entity
    end
  end

  # POST  /room/room_id/
  def create_availability
    @availability = @room.availabilities.new(availability_params)
    # @availaility.room_id = room.id
    @availability.save
  end

  def update_availability
    # set_room
    @room.availabilities.update(availability_params) # unless @room.blank? && @room.availability.empty?
    render json: 'succussfully updated'
  end

  # DELETE /rooms/1
  def destroy
    @room.destroy
  end

  private

  def availability_params
    params.require(:availability).permit(:starts_at, :ends_at, :day_of_week, :holiday)
  end

  # Use callbacks to share common setup or constraints between actions.
  def set_room
    @room = Room.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def room_params
    params.require(:room).permit(:seats_count, :room_type)
  end
end
