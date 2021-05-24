# frozen_string_literal: true

class User < ApplicationRecord

  before_create :check_student
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :jwt_authenticatable, jwt_revocation_strategy: JwtDenylist
   has_many :room_bookings
   has_many :event_bookings

   enum role: [:admin, :professor, :student]

  def active_for_authentication?
    super && active? && verified? 
  end
  
  def inactive_message
    verified? ? super : :not_active
  end

  def check_student
    self.verified = true if self.role == 'student'
  end
end










