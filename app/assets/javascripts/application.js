// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require jquery-mousewheel
//= require s
//= require jquery-s
//= require_tree .

$.fn.scale = function(size){
  var value = 'scale('+String(size)+', '+String(size)+')';
  return this.css({
    '-webkit-transform': value,
    '-moz-transform': value,
    '-ms-transform': value,
    '-o-transform': value,
    'transform': value,
  });
}

!function(){

  Slides = {};

  Slides.selectors = {};
  Slides.selectors.root         = S('.slides');
  Slides.selectors.slide        = Slides.selectors.root('> .slide');
  Slides.selectors.scroller     = Slides.selectors.root('> .scroller');
  Slides.selectors.spacer       = Slides.selectors.scroller('> .spacer');
  Slides.selectors.back_slide   = Slides.selectors.slide('&.back');
  Slides.selectors.middle_slide = Slides.selectors.slide('&.middle');
  Slides.selectors.front_slide  = Slides.selectors.slide('&.front');

  Slides.scroll_percentage = 0;

  Slides.init = function(){
    Slides.root = Slides.selectors.root.get();
    Slides.all  = Slides.selectors.slide.get();
    // Slides.resize();
    Slides.all.scale(0.01, 0.01);
    Slides.root.scroll(Slides.scroll);
    $(window)
      .mousewheel(Slides.scroll)
      // .resize(Slides.resize)
      .keydown(Slides.keydown);
  };

  // Slides.resize = function(){
  //   Slides.selectors.spacer.get().height( Slides.root.height() * Slides.all.length );
  //   Slides.scroll();
  // }

  Slides.scroll = function(event, delta, deltaX, deltaY){
    deltaY = Number(deltaY);
    if (isNaN(deltaY)) deltaY = 0
    deltaY = deltaY / 4;
    Slides.scroll_percentage = Slides.scroll_percentage + deltaY;
    if (Slides.scroll_percentage < 0)   Slides.scroll_percentage = 0;
    if (Slides.scroll_percentage > 100) Slides.scroll_percentage = 100;
    Slides.redraw();
  };

  Slides.redraw = function(){
    var
      scroll_percentage = Slides.scroll_percentage,
      range_size = 100 / Slides.all.length;

    Slides.all.each(function(index){
      var
        slide = $(this),
        from  = range_size * index,
        to    = from + range_size;

      if (scroll_percentage < from || scroll_percentage > to){
        slide.hide();
        return;
      }else{
      // if (scroll_percentage >= from && scroll_percentage <= to){
        slide.show();

        var p = ((scroll_percentage - from) / range_size) * 4
        slide.scale(p);
        console.log(index, p)
      }


    });
  };

  Slides.keydown = function(event){
    switch(event.which) {
      case 33: // page up
        console.log('page up');
      break;
      case 34: // page down
        console.log('page down');
      break;
      case 35: // end
        console.log('end');
      break;
      case 36: // home
        console.log('home');
      break;
    }
  };

  $(Slides.init);

}();























