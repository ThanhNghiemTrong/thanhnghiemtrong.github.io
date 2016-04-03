
jQuery(document).ready(function() {

	var $window = $(window);
	var screen_width = $window.width();

	// use full
	function toggle_tabs(){

        var element_target = $(this).data('tab');

        $(element_target).toggle();
    }
	// nav-mobile
	var 
		wrapper = $('.wrapper'), 
		nav_menu = $('.nav-mobile')
	;
	$('#triggle-menu').click(function(event){
		wrapper.stop().toggleClass('block-translate');
		nav_menu.stop().toggleClass('nav-mobile-toggle');
		return false;
	});
	// tool-header
	$('.animation-icon').hover(function(){
		$(this).find('.icon').stop().toggleClass('active');
	});
	// Home
	if ( $.find('.home').length !='') {

		// full-page
		if (screen_width >= 1024) {

			$('#fullpage').fullpage({

				anchors: ['section-1', 'section-2', 'section-3','section-4', 'footer'],
				navigation: true,
				easingcss3: 'ease-in-out',
			});
		}
		
		var screen_height = $window.height();
		var section_header = $('.header');
		var title_section_height = $('.main-section-title').outerHeight();

		// slide banner
		function header_banner_bxslider() {

			var element_bxslider = $('.header-banner-bxslider li');

			element_bxslider.height($window.height());

			$('.header-banner-bxslider').bxSlider({
				mode: 'fade',
				controls:false,
				touchEnabled:true,
				auto:true,
				tickerHover:true,
				onSliderLoad: function(currentIndex) {
					element_bxslider.eq(currentIndex).find('.header-banner-text').addClass('active');
				},
				onSlideAfter: function($slideElement, oldIndex, newIndex) {
					element_bxslider.eq(oldIndex).find('.header-banner-text').removeClass('active');
					element_bxslider.eq(newIndex).find('.header-banner-text').addClass('active');
				},
				onSlideBefore: function($slideElement, oldIndex, newIndex) {
					element_bxslider.find('.header-banner-text').removeClass('active');
				}
			});
		}
		header_banner_bxslider();

		// block-run
		var block_run = $('.main-project-items > span.posa');
		
		$('.main-project-items li a').hover(function(){
			// main_project_items();
			var x = $(this).position().left; 
			var y = $(this).position().top;

			var block_width = $(this).outerWidth();
			var block_height = $(this).outerHeight();

			block_run.css({
				opacity:.5,
				top:y,
				left:x,
				width:block_width,
				height:block_height
			});
		},function(){
			block_run.css({
				opacity:0
			});
		});

		// on mobile 
		if ( screen_width < 1024 ) {

			$('#owl-main-news').owlCarousel({
		        itemsCustom : [
		           [320,2],
		           [768,4]
		        ],
		        autoPlay : true
		    });
		    $('#owl-main-projects').owlCarousel({
		    	itemsCustom : [
		           [320,2],
		           [768,3]
		        ],
		        autoPlay : true
		    });
		}
		$('.main-news .layout-section li').hover(function(){
			$(this).siblings('li').stop().toggleClass('sibling_opacity');
		});
	}
	// page-product

	var element_active = $('.product-sidebar-left > li');

	element_active.each(function(){

		var element_child = $(this).children('ul');

		element_child.parent('li').addClass('has_child');
	});
	$('.product-sidebar-left > li.has_child > a').on('click',function(event){
		
		event.preventDefault();

		$('.product-sidebar-left > li').removeClass('active');
		$(this).parent('li').stop().toggleClass('active');
	});
	$('.product-layout-show a').on('click',function(event){

		var typeLayout = $(this).data('typeLayout');

		event.preventDefault();
		$('.list-products').removeClass('layout-1','layout-2');
		$('.list-products').addClass(typeLayout);
	});
	// page-product-details
	if ($.find('.main-product-details').length != '') {

		if (screen_width > 1023) {

			var element_fix = $('#fix-scroll-hotline');
			var y_element_fix = element_fix.offset().top;
			var x_element_fix = screen_width - element_fix.offset().left - element_fix.width();

			$window.scroll(function(){

				var scroll_y = $window.scrollTop();

				if ( scroll_y > y_element_fix ) {
					element_fix.addClass('posf');
					element_fix.css({
						right:x_element_fix
					});
				}else {
					element_fix.removeClass('posf');
					element_fix.css({
						right:0
					});
				}
			})
		}	
	}

});
