class ApplicationController < ActionController::Base

  protect_from_forgery
  layout 'application'

  def not_found
    render 'errors/404'
  end

end
