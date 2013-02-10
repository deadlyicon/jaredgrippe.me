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
//= require s
//= require jquery-s
//= require_tree .

!function(){

  var
    root = S('.slides'),
    slide = root('> .slide'),
    back_slide = slide('&.back'),
    middle_slide = slide('&.middle'),
    front_slide = slide('&.front');

  slides = {
    first: function(){
      return slide('&:first').get();
    },
    prev: function(){
      return this.current().prev();
    },
    current: function(){
      return middle_slide.get();
    },
    next: function(){
      return this.current().next();
    },
    forward: function(){
      var current = this.current(), next = this.next();
      if (next.length === 0) next = this.first();

      next.addClass('back').css({display:'table'});
      setTimeout(function(){
        next.addClass('middle');
        current.removeClass('middle').addClass('front');
      });
    }

  }
  // slide = $('.slide:first').addClass('selected');
  // slide = slide.removeClass('center').addClass('forward').next().addClass('center');


}();
