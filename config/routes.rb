ToDoApp::Application.routes.draw do
  root :to => "days#index"

  resources :days do
    resources :tasks
  end
end
