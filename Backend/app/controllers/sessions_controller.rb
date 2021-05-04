class SessionsController < Devise::SessionsController

  
  
  private

  def respond_with(resource, _opts = {})
    render json: {
    status: {code: 200, message: 'Logged in successfully.'},
    data: resource
    }
  end
  
   def respond_to_on_destroy
    head :ok
   end
end