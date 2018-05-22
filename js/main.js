$(document).ready(function(){
    $(this).scrollTop(0);
});

$(document).ready(function(){
  $('#nav-icon').click(function(){
    $(this).toggleClass('open');
    $('.fullscreen-nav').toggleClass('open');
  });
});
$(document).ready(function() {
    $('#wow').hover(function(){
        $('#one').addClass('item_active');
    },
    function(){
        $('#one').removeClass('item_active');
    });
});
$(document).ready(function() {
$('#db').hover(function(){
    $('#two').addClass('item_active');
},
function(){
    $('#two').removeClass('item_active');
});
});
$(document).ready(function() {
$('#sc').hover(function(){
    $('#three').addClass('item_active');
},
function(){
    $('#three').removeClass('item_active');
});
});
$(document).ready(function() {
$('#hs').hover(function(){
    $('#four').addClass('item_active');
},
function(){
    $('#four').removeClass('item_active');
});
});
$(document).ready(function() {
$('#ow').hover(function(){
    $('#five').addClass('item_active');
},
function(){
    $('#five').removeClass('item_active');
});
});

jQuery(document).ready(function(event){
  var isAnimating = false,
    newLocation = '';
    firstLoad = false;

  $('main').on('click', '[data-type="page-transition"]', function(event){
    event.preventDefault();
    var newPage = $(this).attr('href');
    if( !isAnimating ) changePage(newPage, true);
    firstLoad = true;
  });
  $(window).on('popstate', function() {
  	if( firstLoad ) {
      var newPageArray = location.pathname.split('/'),
        newPage = newPageArray[newPageArray.length - 1];

      if( !isAnimating  &&  newLocation != newPage ) changePage(newPage, false);
    }
    firstLoad = true;
	});

	function changePage(url, bool) {
    isAnimating = true;
    $('body').addClass('page-is-changing');
    $('.cd-loading-bar').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
    	loadNewContent(url, bool);
      newLocation = url;
      $('.cd-loading-bar').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
    });
    if( !transitionsSupported() ) {
      loadNewContent(url, bool);
      newLocation = url;
    }
	}
	function loadNewContent(url, bool) {
		url = ('' == url) ? 'index.html' : url;
  	var newSection = 'cd-'+url.replace('.html', '');
  	var section = $('<div class="cd-main-content '+newSection+'"></div>');

  	section.load(url+' .cd-main-content > *', function(event){
      $(document).ready(function(){
    $(this).scrollTop(0);
});

      $(document).ready(function(){
      	$('#nav-icon').click(function(){
      		$(this).toggleClass('open');
          $('.fullscreen-nav').toggleClass('open');
      	});
      });
      $(document).ready(function() {
          $('#wow').hover(function(){
              $('#one').addClass('item_active');
          },
          function(){
              $('#one').removeClass('item_active');
          });
      });
      $(document).ready(function() {
      $('#db').hover(function(){
          $('#two').addClass('item_active');
      },
      function(){
          $('#two').removeClass('item_active');
      });
      });
      $(document).ready(function() {
      $('#sc').hover(function(){
          $('#three').addClass('item_active');
      },
      function(){
          $('#three').removeClass('item_active');
      });
      });
      $(document).ready(function() {
      $('#hs').hover(function(){
          $('#four').addClass('item_active');
      },
      function(){
          $('#four').removeClass('item_active');
      });
      });
      $(document).ready(function() {
      $('#ow').hover(function(){
          $('#five').addClass('item_active');
      },
      function(){
          $('#five').removeClass('item_active');
      });
      });

      $('main').html(section);
      var delay = ( transitionsSupported() ) ? 1200 : 0;
      setTimeout(function(){
        ( section.hasClass('cd-1') ) ? $('body').addClass('cd-1') : $('body').removeClass('cd-1');
        ( section.hasClass('cd-2') ) ? $('body').addClass('cd-2') : $('body').removeClass('cd-2');
        ( section.hasClass('cd-3') ) ? $('body').addClass('cd-3') : $('body').removeClass('cd-3');
        ( section.hasClass('cd-4') ) ? $('body').addClass('cd-4') : $('body').removeClass('cd-4');
        ( section.hasClass('cd-5') ) ? $('body').addClass('cd-5') : $('body').removeClass('cd-5');
        $('body').removeClass('page-is-changing');
        $('.cd-loading-bar').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
          isAnimating = false;
          $('.cd-loading-bar').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
        });

        if( !transitionsSupported() ) isAnimating = false;
      }, delay);

      if(url!=window.location && bool){
        window.history.pushState({path: url},'',url);
      }
		});
  }

  function transitionsSupported() {
    return $('html').hasClass('csstransitions');
  }
});


$(window).scroll(function() {

  var $window = $(window),
      $wrapper2 = $('.wrapper2'),
      $panel = $('.panel');

  var scroll = $window.scrollTop() + ($window.height() / 2);

  $panel.each(function () {
    var $this = $(this);

    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {

      $wrapper2.removeClass(function (index, css) {
        return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
      });

      $wrapper2.addClass('color-' + $(this).data('color'));
    }
  });

}).scroll();
