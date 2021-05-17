class RoomsController < ApplicationController
   before_action :set_room, only: [:show, :update, :destroy, :createAvailability, :updateAvailability, :index_availabilities]
       before_action :authenticate_user!, except: [ :index, :create, :index_availabilities]


#
  # GET /rooms
  def index
    @rooms = Room.all
   if !params[:room_type].blank?
   @rooms=Room.filter_room(params[:room_type])
   
    #     render json: @rooms
  end
   render json: @rooms
  end

  def index_availabilities
   
    @availabilities=@room.availabilities.all
    render json: {availabilities: @availabilities}
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
   #POST  /room/room_id/
  def createAvailability
  
    @availability = @room.availabilities.new(availability_params)
   # @availaility.room_id = room.id
    @availability.save
    
  end
  
  def updateAvailability
    #set_room
    unless @room.blank? && @room.availability.empty?
    @room.availability.update(availability_params)
    end
    render json: "succussfully updated"
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
