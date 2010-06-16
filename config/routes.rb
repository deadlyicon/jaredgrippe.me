JaredgrippeMe::Application.routes.draw do |map|
  match 'javascripts/application.js' => 'javascripts#application', :as => :application_javascript
  root :to => "profile#index"
  match '*path' => "application#not_found"
end
