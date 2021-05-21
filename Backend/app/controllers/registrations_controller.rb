# frozen_string_literal: true

class RegistrationsController < Devise::RegistrationsController

    private

    def respond_with(resource, _opts = {})
      render json:UserSerializer.new(resource)
    end
end
