Sass::Plugin.options[:template_location] = { 'app/stylesheets' => 'tmp/stylesheets' }

require "fileutils"
FileUtils.mkdir_p(Rails.root.join("tmp", "stylesheets"))
Rails.application.config.middleware.use(Rack::Static, :root => "tmp/", :urls => ["/stylesheets"])
