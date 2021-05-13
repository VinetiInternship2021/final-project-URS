class RoomsController < ApplicationController
   before_action :set_room, only: [:show, :update, :destroy, :createAvailability, :updateAvailability]

#
  # GET /rooms
  def index
    if !params[:room_type].blank?
    rooms.filter_room(params[:room_type])
    else @rooms = Room.all
  end
    render json: @rooms
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
  
  def createAvailability
    unless room.blank?
    @availability=Availability.create(availability_params)
    render json: @availability
    end
  end

  
  def updateAvailability
    unless @room.blank? && @room.availability.empty?
    room.availability.update(availability_params)
    end
    render json: "succussfully updated"
  end

  # DELETE /rooms/1
  def destroy
    @room.destroy
  end

  private
    def availability_params
      
        params.require(:availability).permit(:starts_at, :ends_at,:day_of_week, :holiday, :room_id)
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
