class StylesheetsController < ApplicationController

  SASS_PATH = Rails.root.join('app','stylesheets')
  APPLICATION_TEMPLATE_PATH = File.join(SASS_PATH,'application.sass')

  def application
    # TODO: set expires header
    template = File.open(APPLICATION_TEMPLATE_PATH).read
    engine =  Sass::Engine.new(template, {:load_paths => [SASS_PATH]})
    render :text => engine.render, :content_type => "text/css"
  end

end
