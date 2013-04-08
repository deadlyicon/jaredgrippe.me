source 'https://rubygems.org'
ruby "1.9.3"

gem 'rails', '3.2.11'
gem 'haml-rails'
gem 'jquery-rails'
gem 'thin'

gem 'method_object'
gem 'rails-widgets', git: 'https://github.com/deadlyicon/rails-widgets'
# gem 'rails-widgets', path: './vendor/gems/rails-widgets'
gem 'pg'
gem 'simple_form'

group :assets do
  gem 'compass-rails'
  gem 'sass-rails'
  gem 'font-awesome-sass-rails'
  gem 'uglifier', '>= 1.0.3'
end

group :development do
  gem 'style-guide'
  gem 'rb-fsevent', require: nil
  # gem 'sql-logging'
end

group :development, :test do
  gem 'debugger'
  gem 'rspec'
  gem 'rspec-rails'
  gem 'foreman' # for heroku
  gem 'pry-rails'
  gem 'pry-debugger'
  gem 'pry-stack_explorer'
end

group :test do
  gem 'capybara', '>= 2.0.2'
  gem 'capybara-webkit'
  gem 'shoulda-matchers'
  gem 'cucumber-rails', require: nil
  gem 'factory_girl_rails'
  gem 'ffaker'
  gem 'database_cleaner'
  gem 'fixture_builder'
end
