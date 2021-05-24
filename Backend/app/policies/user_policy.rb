class UserPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope.all
    end
  end

  def verification?
    @user.role == 'admin'
  end

  def show?
    @user.role == 'admin' 
  end

  def update?
    @user.role == 'admin' || @user.id == @record.id
  end

  def destroy?
    @user.role == 'admin'
  end
end
