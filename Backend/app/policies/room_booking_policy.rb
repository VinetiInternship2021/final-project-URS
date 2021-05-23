class RoomBookingPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope.all
    end
  end

  def update?
    @record.user_id == @user.id || @user.role == 'admin'
  end

  def destroy?
    @record.user_id == @user.id || @user.role == 'admin'
  end
end
