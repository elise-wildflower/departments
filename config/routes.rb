Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get '/departments', to: "departments#index" 
  get '/departments/new', to: "departments#new"
end
