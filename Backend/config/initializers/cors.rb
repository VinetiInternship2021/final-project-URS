Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '*'
    resource '*', headers: :any, expose: ['authorization'], methods: %i[get post patch put delete]
  end
end
