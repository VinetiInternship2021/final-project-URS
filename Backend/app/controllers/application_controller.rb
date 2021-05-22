# frozen_string_literal: true

class ApplicationController < ActionController::API
<<<<<<< HEAD
    include Pundit
    before_action :authenticate_user!
    before_action :configure_permitted_parameters, if: :devise_controller?
    include ActionController::MimeResponds
    respond_to :json
=======
  include ActionController::Helpers
  before_action :configure_permitted_parameters, if: :devise_controller?
  before_action :authenticate_user!
  include ActionController::MimeResponds
  respond_to :json
>>>>>>> b728f6b (add Room Booking serializer, and little bug fixings)

  private

    def configure_permitted_parameters
        devise_parameter_sanitizer.permit(:sign_up, keys: [:name,:role])
    end    
end
