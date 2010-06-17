JaredgrippeMe::Application.routes.draw do |map|
  match 'stylesheets/application.css' => 'stylesheets#application', :as => :application_stylesheet
  match 'javascripts/application.js'  => 'javascripts#application', :as => :application_javascript
  match 'resume' => redirect("https://docs.google.com/View?id=dfk6v52k_55n5cjw9d7")

  root :to => "profile#index"
  match '*path' => "application#not_found"
end
