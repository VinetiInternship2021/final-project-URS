# frozen_string_literal: true

Rails.application.routes.draw do
  resources :room_bookings, only: %i[index create update destroy show] do
    resources :events, only: [:create]
  end
  resources :event_bookings, only: %i[update destroy show]
  resources :events, only: %i[destroy update show index] do
    resources :event_bookings, only: [:create, :index]
  end
  resources :rooms
  get '/rooms/:id/availabilities', to: 'rooms#index_availabilities'
  post '/rooms/:id/create_availability', to: 'rooms#create_availability'
  put '/rooms/:id/availability/:availability_id', to: 'rooms#update_availability'
  get '/event_bookings', to: 'event_bookings#current_event_bookings'

  get 'users/verification', to: 'users#verification'
  resources :users

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
