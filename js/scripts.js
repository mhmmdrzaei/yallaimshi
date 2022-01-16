$(function(){

	$('.indexCall').click(function() {
		$('.menuInner').toggleClass('menuOpen');
		$('.navigation').toggleClass('navigationOpen');
		$('body').toggleClass('overflowHidden');
	});
	
	$('.bxslider').bxSlider({
		// oneToOneTouch: true,
		controls: true,
		pagerType: 'short',
		prevText: '←',
		nextText:'→',
		adaptiveHeight: true,
		// onSlideAfter: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
		//     $('.active-slide').removeClass('active-slide');
		//     $('.bxslider>li').eq(currentSlideHtmlObject + 1).addClass('active-slide')
		// },
		// onSliderLoad: function () {
		//     $('.bxslider>li').eq(1).addClass('active-slide')
		// },

	});

});