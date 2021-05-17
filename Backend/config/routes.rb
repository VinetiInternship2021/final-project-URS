Rails.application.routes.draw do
  
  #shallow do resources :users do
  #   resources :rooms , only: [:index, :new, :create, :createAvailability, :updateAvailability]
  #   resources :room_bookings, only: [:index, :new, :create]
  #   resources :event_bookings, only: [:]
     #end
    #end

  #post 'users/:user_id/event_bookings', to: 'users#event_booking'
  # bget '/rooms/:id/availabilities'
  #post '/rooms/:id/availabilities', to: 'rooms#createAvailability'
  #put '/rooms/:room_id/availability/:id', to: 'rooms#updateAvailability'
#  post '/room_bookings', to: 'room_bookings#create'
#  resources :users do
  #resources :rooms, :except => [:update, :updateAvailability, :destroy, :index, :show]# :createAvailability]
#  resources :room_bookings, :except => [ :update, :destroy, :show, :index_students] do
 #     resources :events, :except => [:update, :destroy, :show]
  #  end
  #resources :event_bookings, :except => [ :update, :destroy, :show]
  
 # end
 # resources :rooms, :only [:show, :update, :updateAvailability, :destroy, :index, :show] # :updateAvailability]
  resources :room_bookings, :only => [:index, :create, :update, :destroy, :show, :index_students, :show] do
    resources :events, :only=> [:create]
  end
  resources :event_bookings, :only => [ :update, :destroy, :show]
  resources :events, :only => [:destroy, :show]
 
  resources :rooms
  #  member do 
   #   post :createAvailability 
    #end

  get '/rooms/:id/availabilities', to: 'rooms#index_availabilities'
  post '/rooms/:id/createAvailability', to: 'rooms#createAvailability'


  #resources :room_bookings 
 # get '/room_bookings', to: 'room_bookings#index'
  #post'/room_bookings', to: 'room_bookings#create'

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