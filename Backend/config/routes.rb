# frozen_string_literal: true

Rails.application.routes.draw do
  resources :room_bookings, only: %i[index create update destroy show index_students show] do
    resources :events, only: [:create]
  end
  resources :event_bookings, only: %i[update destroy show]
  resources :events, only: %i[destroy show index]

  resources :rooms
  get '/rooms/:id/availabilities', to: 'rooms#index_availabilities'
  post '/rooms/:id/create_availability', to: 'rooms#create_availability'

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
