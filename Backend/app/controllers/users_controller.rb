class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]

  # Get/users/verification
  def verification
    @requesters = User.where(verified: false)
    authorize current_user
    render json: UserSerializer.new(@requesters)
  end

  # GET /users
  def index
    @users = User.all
    authorize current_user
    render json: UserSerializer.new(@users)
  end

  # GET /users/1
  def show
    @user = User.find(params[:id])
    render json: UserSerializer.new(@user)
  end

  # PATCH/PUT /users/1
  def update
    authorize current_user
    if @user.update(user_params)
      render json: UserSerializer.new(@user)
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    authorize current_user
    @user.destroy
  end

  private

  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:email, :name, :verified, :active)
  end
end
