Rails.application.routes.draw do
  get 'home/index'
  devise_for :users, controllers: {
    sessions: 'users/sessions'
  }  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check
  get '/make_payment', to: 'payments#make_payment'
  get '/success', to: 'payments#success'
  get '/failed', to: 'payments#failure'

  # Defines the root path route ("/")
  root "home#index"
  resources :products
end
