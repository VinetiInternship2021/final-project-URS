# frozen_string_literal: true

class RoomsController < ApplicationController
  before_action :set_room,
                only: %i[show update destroy create_availability update_availability index_availabilities]

  # GET /rooms
  def index
    @rooms = Room.all
    @rooms = Room.filter_room(params[:room_type]) unless params[:room_type].blank?
    # render json: @rooms, each_serializer: RoomSerializer, root: false
    render json: RoomSerializer.new(@rooms).serializable_hash
  end

  def index_availabilities
    options = { include: [:availabilities] }
    @availabilities = @room.availabilities.all
    #  render json: { availabilities: @availabilities }
    render json: RoomSerializer.new(@room, options).serializable_hash
  end

  # GET /rooms/1
  def show
    render json: RoomSerializer.new(@room).serializable_hash
  end

  # POST /rooms
  def create
    @room = Room.new(room_params)
    if @room.save
      render json: RoomSerializer.new(@room).serializable_hash, status: :created, location: @room
    else
      render json: @room.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /rooms/1
  def update
    if @room.update(room_params)
      render json: RoomSerializer.new(@room).serializable_hash
    else
      render json: @room.errors, status: :unprocessable_entity
    end
  end

  # POST  /room/room_id/
  def create_availability
    options = { include: [:availabilities] }
    @availability = @room.availabilities.new(availability_params)
    if @availability.save
      render json: RoomSerializer.new(@room, options).serializable_hash, status: :created, location: @room
    # @availability.save
    else
      render json: @availability.errors, status: :unprocessable_entity
    end
  end

  def update_availability
    # options = { include: [:availability] }

    @availability = Availability.find_by(:id => params[:id])

    if @availability.update(availability_params) # unless @room.blank? && @room.availability.empty?
      render json: AvailabilitySerializer.new(@availability).serializable_hash
    else
      render json: @availability.errors, status: :unprocessable_entity
    end
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
