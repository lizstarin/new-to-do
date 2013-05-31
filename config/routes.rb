ToDoApp::Application.routes.draw do
  root :to => "days#index"

  resources :days
  resources :tasks
end
