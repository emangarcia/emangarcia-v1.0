$(document).ready(function(){


});

$(window).load(function() {


  $('.flexslider').flexslider({
    animation: "fade",
    slideshowSpeed: 5000,
    animationSpeed: 1000,
    controlNav: false,
	directionNav: false
  });
	
	$(' #da-thumbs > li ').each( function() { $(this).hoverdir(); } );

});


$(window).load(function() {

	var s = skrollr.init({
		forceHeight: false
	});

	//The options (second parameter) are all optional. The values shown are the default values.
	skrollr.menu.init(s, {
	    //skrollr will smoothly animate to the new position using `animateTo`.
	    animate: true,

	    //The easing function to use.
	    easing: 'swing',

	    //How long the animation should take in ms.
	    duration: function(currentTop, targetTop) {
	        //By default, the duration is hardcoded at 500ms.
	        return 1000;

	        //But you could calculate a value based on the current scroll position (`currentTop`) and the target scroll position (`targetTop`).
	        //return Math.abs(currentTop - targetTop) * 5;
	    },
	});



				
	var Page = (function() {
		var $navArrows = $( '#nav-arrows' ),
			$nav = $( '#nav-dots > span' ),
			slitslider = $( '#slider' ).slitslider( {
				onBeforeChange : function( slide, pos ) {

					$nav.removeClass( 'nav-dot-current' );
					$nav.eq( pos ).addClass( 'nav-dot-current' );

				}
			} ),

			init = function() {

				initEvents();
				
			},
			initEvents = function() {

				$nav.each( function( i ) {
				
					$( this ).on( 'click', function( event ) {
						
						var $dot = $( this );
						
						if( !slitslider.isActive() ) {

							$nav.removeClass( 'nav-dot-current' );
							$dot.addClass( 'nav-dot-current' );
						
						}
						
						slitslider.jump( i + 1 );
						return false;
					
					} );
					
				} );

				// add navigation events
				$navArrows.children( ':last' ).on( 'click', function() {

					slitslider.next();
					return false;

				} );

				$navArrows.children( ':first' ).on( 'click', function() {
					
					slitslider.previous();
					return false;

				} );


			};

			return { init : init };

	})();

	Page.init();

	/**
	 * Notes:
	 *
	 * example how to add items:
	 */

	/*
	
	var $items  = $('<div class="sl-slide sl-slide-color-2" data-orientation="horizontal" data-slice1-rotation="-5" data-slice2-rotation="10" data-slice1-scale="2" data-slice2-scale="1"><div class="sl-slide-inner bg-1"><div class="sl-deco" data-icon="t"></div><h2>some text</h2><blockquote><p>bla bla</p><cite>Margi Clarke</cite></blockquote></div></div>');
	
	// call the plugin's add method
	ss.add($items);

	*/

});

//Initial load of page
$(window).load(sizeContent);

//Every resize of window
$(window).resize(sizeContent);

//Dynamically assign height
function sizeContent() {
    var newHeight = $(window).height() - $("#header").height()  + "px";
    var newPanelTop = $(window).height();
    console.log(newHeight);
    $("#about #content").css("height", newHeight);
    //$("#status").css("height", newHeight);
    //$("#portfolio").css("top", newPanelTop);
}

$(window).load(function() { // makes sure the whole site is loaded
	$("#status").fadeOut(); // will first fade out the loading animation
	$("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
});

