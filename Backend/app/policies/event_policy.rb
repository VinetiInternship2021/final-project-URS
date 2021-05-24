class EventPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope.all
    end
  end

  def create?
    @user.role == 'professor' || @user.role == 'admin'
  end

  def update?
    @record.room_booking.user_id == @user.id || @user.role == 'admin'
  end

  def destroy?
    @record.room_booking.user_id == @user.id || @user.role == 'admin'
  end
end
