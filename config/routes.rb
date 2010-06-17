JaredgrippeMe::Application.routes.draw do |map|
  match 'stylesheets/application.css' => 'stylesheets#application', :as => :application_stylesheet
  match 'javascripts/application.js'  => 'javascripts#application', :as => :application_javascript
  root :to => "profile#index"
  match '*path' => "application#not_found"
end
