module JavascriptsHelper
  def application_javascript_path_with_timestamp
    "#{application_javascript_path}?#{JavascriptsController::SPROCKETS_SECRETARY.source_last_modified.to_i}"
  end
end
