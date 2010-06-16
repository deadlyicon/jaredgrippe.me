class JavascriptsController < ApplicationController

  SPROCKETS_SECRETARY = ::Sprockets::Secretary.new({
    :root            => Rails.root,
    :cache_location  => Rails.root + 'tmp',
    :never_update    => Rails.env.production?,
    :always_update   => Rails.env.development?,
    :load_path       => ['app/javascripts', 'vendor/javascripts'],
    :source_files    => ['app/javascripts/application.js'],
    :strip_comments  => !Rails.env.development?,
  })

  def application
    SPROCKETS_SECRETARY.reset!  unless Rails.env == "production"
    render :js => SPROCKETS_SECRETARY.concatenation.to_s
  end

end
