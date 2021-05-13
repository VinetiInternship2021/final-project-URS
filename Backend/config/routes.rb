Rails.application.routes.draw do
  resources :users
  #post 'users/:user_id/event_bookings', to: 'users#event_booking'
  #post '/rooms/:room_id/availability', to: 'rooms#createAvailability'
  #put '/rooms/:room_id/availability/id', to: 'rooms#updateAvailability'
  resources :room_bookings
  resources :event_bookings
  resources :events
  resources :rooms  
  get '/room_bookings', to: 'room_bookings#index'

  devise_for :users,
             defaults: { format: :json },
             path: '',
             path_names: {
               sign_in: 'login',
               sign_out: 'logout',
               registration: 'signup'
             },
             controllers: {
              sessions: 'sessions',
              registrations: 'registrations'
            }
end