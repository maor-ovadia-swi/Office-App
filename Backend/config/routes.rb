Rails.application.routes.draw do
  resources :items
  resources :employees
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
get '/employees/:id/items'
  # Defines the root path route ("/")
  # root "articles#index"
end
