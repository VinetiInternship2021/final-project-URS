# frozen_string_literal: true

class ApplicationController < ActionController::API
<<<<<<< HEAD
  before_action :authenticate_user!
  before_action :configure_permitted_parameters, if: :devise_controller?
  respond_to :json

  include ActionController::MimeResponds
  include Pundit
  rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized

    
=======
    include Pundit
    before_action :authenticate_user!
    before_action :configure_permitted_parameters, if: :devise_controller?
    include ActionController::MimeResponds
    respond_to :json
    include ActionController::Helpers
>>>>>>> a21d032e705b3c59ea97fc535e98b11af7f9bd82
  private

    def configure_permitted_parameters
        devise_parameter_sanitizer.permit(:sign_up, keys: [:name,:role])
    end   
    
    def user_not_authorized
      render json: "You don't have access", status: 401
    end
end
