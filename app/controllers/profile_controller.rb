class ProfileController < ApplicationController

  def index
    @links = [
      ["Google Profile", "http://www.google.com/profiles/deadlyicon"        ],
      ["Twitter",        "http://twitter.com/deadlyicon"                    ],
      ["Facebook",       "http://www.facebook.com/deadlyicon"               ],
      ["Awesome Links",  "http://awesome.deadlyicon.com"                    ],
      ["Flickr",         "http://www.flickr.com/deadlyicon"                 ],
      ["Photos",         "http://www.flickr.com/people/deadlyicon/photosof/"],
      ["Code",           "http://www.github.com/deadlyicon"                 ],
      ["Resume",         "/resume"                                          ],
    ]
  end

end
