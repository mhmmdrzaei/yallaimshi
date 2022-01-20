$(function(){


	// $('.indexCall').click(function() {
	// 	$('.menuInner').toggleClass('menuOpen');
	// 	$('.navigation').Class('navigationOpen');
	// 	$('body').toggleClass('overflowHidden');
	// });

	// When a toggle is clicked (activated) show their content
	$('.indexCall').click(function () {
	  var el = $(this),
	      parent = el.closest('.displayText');

	  if ($('.navigation').hasClass('navigationOpen')) {
	    // parent.find('.displayText').slideToggle();
	    $('.navigation').addClass('navigationClose');
	    // $('.menuInner').removeClass('menuOpen');
	    // $('.menuInner').addClass('navigationClose');
	    
	    $('.navigation').removeClass('navigationOpen');
	    $('body').removeClass('overflowHidden');
	  } else {
	    // parent.find('.displayText').slideToggle();
	    $('.menuInner').addClass('menuOpen');
	    $('.navigation').addClass('navigationOpen');
	    $('body').addClass('overflowHidden');
	    $('.navigation').removeClass('navigationClose');
	  }
	  return false;
	});
	$('.projects a').click(function() {
		$('.menuInner').toggleClass('menuOpen');
		$('.navigation').removeClass('navigationOpen');
		$('.navigation').addClass('navigationClose');
		$('body').toggleClass('overflowHidden');
	});



	$('.bxslider').bxSlider({
		// oneToOneTouch: true,
		controls: true,
		pagerType: 'short',
		prevText: '←',
		nextText:'→',
		adaptiveHeight: true,
		keyboardEnabled: true,
		pagerType: 'short',
		startSlide: 1,
		useCSS: false,
		infiniteLoop: false,
		hideControlOnEnd: true,

	});

	$(".top").click(function(){
	  $(this).find(".projectDetails").toggle(500);
	   $(this).find('.projectTitle').toggleClass('minus');
	  
	});

	$(window).scroll(function() {
	  var y = $(this).scrollTop();
	  // var x = $(window).width();
	  if (y > 500){
	    $(".pageTitle").fadeIn();
	    $('.indexCall').fadeIn();
	  } else if ((y < 500) && (x > 700)) {
	    $('.pageTitle').fadeOut(100);
	    $('.indexCall').fadeOut(100);

	  }
	});


	$("a").on('click', function(event) {

	  // Make sure this.hash has a value before overriding default behavior
	  if (this.hash !== "") {
	    // Prevent default anchor click behavior
	    event.preventDefault();

	    // Store hash
	    var hash = this.hash;

	    // Using jQuery's animate() method to add smooth page scroll
	    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
	    $('html, body').animate({
	      scrollTop: $(hash).offset().top
	    }, 800, function(){

	      // Add hash (#) to URL when done scrolling (default click behavior)
	      window.location.hash = hash;
	    });
	  } // End if
	});

});

