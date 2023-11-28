Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  resources :champions, only: [:index, :show]
  resources :champion_comments, only: [:index, :show, :create, :update, :destroy]
  get "/me", to: "capstone_users#show"
  post "/signup", to: "capstone_users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
