# frozen_string_literal: true

class ApplicationController < ActionController::API
    include Pundit
    before_action :authenticate_user!
    before_action :configure_permitted_parameters, if: :devise_controller?
    include ActionController::MimeResponds
    respond_to :json
    include ActionController::Helpers
  private

    def configure_permitted_parameters
        devise_parameter_sanitizer.permit(:sign_up, keys: [:name,:role])
    end    
end
