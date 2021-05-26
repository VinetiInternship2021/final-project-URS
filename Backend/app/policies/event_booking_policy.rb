class EventBookingPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope.all
    end
    def index?
      @user.role == 'admin'
    end

    def destroy?
      @record.user_id == @user.id || @user.role == 'admin'
    end
  end
end
