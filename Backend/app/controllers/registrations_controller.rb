class RegistrationsController < Devise::RegistrationsController
  
  
  
  
  
  private
  
  
  def respond_with(resource, _opts = {})
    render json: {
    status: {code: 200, message: 'Logged in successfully.'},
    data: resource
    }
  end 
  
  def sign_up_params 
    params.permit(:email,:password,:name,:surname)
  end
end