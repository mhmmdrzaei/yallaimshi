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
	  if ((y > 500) && ($('body').hasClass('page-id-23'))){
	    $(".pageTitle").fadeIn();
	    $('.indexCall').fadeIn();
	  } else if ((y < 500) && ($('body').hasClass('page-id-23'))) {
	    $('.pageTitle').fadeOut(100);
	    $('.indexCall').fadeOut(100);

	  }
	});

	$('.open-Contact').click(function(){
		$('.contactInfo').addClass('contactClicked');
		if ($('.navigation').hasClass('navigationOpen')) {
		  // parent.find('.displayText').slideToggle();
		  $('.navigation').addClass('navigationClose');
		  // $('.menuInner').removeClass('menuOpen');
		  // $('.menuInner').addClass('navigationClose');
		  
		  $('.navigation').removeClass('navigationOpen');
		  $('body').removeClass('overflowHidden');
		} 


	});
	$('.close').click(function(){
		$('.contactInfo').removeClass('contactClicked');
	});
	$('.copy').on('click', function() {
		$(this).html('Copied :)')
	  // finds data-clipboard-test for content p class "click" 
	  value = $(this).data('clipboard-text'); 
	  // Temporary input tag to store text
	  var $temp = $("<input>");
	  $("body").append($temp);
	  // Selects text value
	  $temp.val(value).select();
	  // Copies text, removes temporary tag
	  document.execCommand("copy");
	  $temp.remove();
	  
	})


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

