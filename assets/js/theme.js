(function($) {
    'use strict';

			/*==== One Page Nav  ====*/
			
			var top_offset = $('.one_page').height() +0;
			$('.one_page .corporate_menu .nav_scroll').onePageNav({
				currentClass: 'current',
				changeHash: false,
				scrollSpeed: 1000,
				 scrollOffset: top_offset,
				scrollThreshold: 0.5,
				filter: '',
				easing: 'swing',
			});
			
			var top_offset = $('.one_page').height() +0;
			$('.one_page .poket_menu .nav_scroll').onePageNav({
				currentClass: 'current',
				changeHash: false,
				scrollSpeed: 1000,
				 scrollOffset: top_offset,
				scrollThreshold: 0.5,
				filter: '',
				easing: 'swing',
			});

			$(".nav_scroll > li:first-child").addClass("current");
			
			/*==== sticky nav 1  ====*/
			
			$('.one_page').scrollToFixed({
				preFixed: function() {
					$(this).find('.scroll_fixed').addClass('prefix');
				},
				postFixed: function() {
					$(this).find('.scroll_fixed').addClass('postfix').removeClass('prefix');
				}
			});	
			/*==== sticky nav 2  ====*/
			var headers1 = $('.trp_nav_area');
			$(window).on('scroll', function() {

				if ($(window).scrollTop() > 200) {
					headers1.addClass('hbg2');
				} else {
					headers1.removeClass('hbg2');
				}		
			});	

			/*==== Mobile Menu  ====*/
			
			$('.mobile-menu nav').meanmenu({
				meanScreenWidth: "990",
				meanMenuContainer: ".mobile-menu",
				onePage: true,
			});	
			
			/*==== Bootstrap Accordion  ====*/
			
			$('.faq-part .card').each(function () {
				var $this = $(this);
				$this.on('click', function (e) {
					var has = $this.hasClass('active');
					$('.faq-part .card').removeClass('active show');
					if (has) {
						$this.removeClass('active show');
					} else {
						$this.addClass('active show');
					}
				});
			});
	
			/*==== WOW active js   ====*/
			
			new WOW().init();

			/*==== scrollUp  ====*/
			
			$.scrollUp({
				scrollText: '<i class="fa fa-angle-up"></i>',
				easingType: 'linear',
				scrollSpeed: 900,
				animation: 'fade'
			});

			/*==== Venubox  ====*/
			$('.venobox').venobox({

				numeratio: true,

				infinigall: true

			});
			
			// top quearys menu 
			var emsmenu = $(".em-quearys-menu i.t-quearys");
			var emscmenu = $(".em-quearys-menu i.t-close");
			var emsinner = $(".em-quearys-inner");
			emsmenu.on('click', function() {
				emsinner.addClass('em-s-open');
				$(this).addClass('em-s-hiddens');
				emscmenu.removeClass('em-s-hidden');
			});
			emscmenu.on('click', function() {
				emsinner.removeClass('em-s-open');
				$(this).addClass('em-s-hidden');
				emsmenu.removeClass('em-s-hidden');
			});
			
			/*==== testimonial area actve ====*/
			var witrbtslick = $('.testimonial3_active');				
				if(witrbtslick.length > 0){
				witrbtslick.slick({
					infinite: true,
					autoplay: true,
					autoplaySpeed: 6000,
					speed: 2000,					
					slidesToShow: 3,
					slidesToScroll: 1,
					arrows: true,
					dots: false,
					responsive: [
						{
							breakpoint: 1200,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 992,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 767,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							}
						}
						]
					});
				}
			
			/*==== Brand active ====*/
			var witrbslick = $('.brand_active');
				
				if(witrbslick.length > 0){

				witrbslick.slick({
					infinite: true,
					autoplay: true,
					default: true,
					autoplaySpeed: 6000,
					speed: 1000,					
					slidesToShow: 5,
					slidesToScroll: 1,
					arrows: false,
					dots: false,
					responsive: [
						{
							breakpoint: 1200,
							settings: {
								slidesToShow: 4,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 992,
							settings: {
								slidesToShow: 3,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 767,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							}
						}
						]
					});
				}

			/*==== blog active ====*/
			var witrbslick = $('.blog_active');				
				if(witrbslick.length > 0){
				witrbslick.slick({
					infinite: true,
					autoplay: true,
					autoplaySpeed: 3000,
					speed: 1000,					
					slidesToShow: 3,
					slidesToScroll: 1,
					arrows: true,
					dots: false,
					responsive: [
						{
							breakpoint: 1200,
							settings: {
								slidesToShow: 3,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 992,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 767,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							}
						}
						]
					});
				}

			/*==== blog sidebar active ====*/
			$('.blog_sidebar_image_act').slick({	

				infinite: true,
				autoplay: true,
				autoplaySpeed: 3000,
				speed: 1000,					
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: true,
				centerPadding: '',					
				arrows: false,
				dots: false,
				responsive: [
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					}
					// You can unslick at a given breakpoint now by adding:
					// settings: "unslick"
					// instead of a settings object
					]
				});
				
			/*==== project active ====*/
			var witrbslick = $('.project_active');				
			if(witrbslick.length > 0){
			witrbslick.slick({
				infinite: true,
				autoplay: true,
				autoplaySpeed: 2000,
				speed: 1000,					
				slidesToShow: 4,
				slidesToScroll: 1,
				arrows: true,
				dots: false,
				responsive: [
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 767,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					}
					]
				});
				}

			/*==== Portfolio Isotope  ====*/
			if ($.fn.isotope) {

				var $portfolio = $('.portfolio_active');

				$portfolio.isotope({

					itemSelector: '.grid-item',

					filter: '*',

					resizesContainer: true,

					layoutMode: 'masonry',

					transitionDuration: '0.8s'

				});

				$('.filter_menu li').on('click', function() {

					$('.filter_menu li').removeClass('current_menu_item');

					$(this).addClass('current_menu_item');

					var selector = $(this).attr('data-filter');

					$portfolio.isotope({

						filter: selector,

					});

				});

			};
			
			/*==== call to action  ====*/
			window.mc4wp = window.mc4wp || {
			listeners: [],
			forms: {
				on: function(evt, cb) {
					window.mc4wp.listeners.push(
						{
							event   : evt,
							callback: cb
						}
					);
				}
			}
		}

			/*==== counter active ====*/
				
			$('.counter').counterUp({
				delay: 10,
				time: 1000
			});

			/* popup sideber menu */
			var rightma = $(".right_sideber_menu i.openclass");
			var rightmi = $(".right_sideber_menu i.closeclass");
			var rightmir = $(".right_sideber_menu_inner");
			rightma.on('click', function() {
				rightmir.addClass('tx-s-open');
			});
			rightmi.on('click', function() {
				rightmir.removeClass('tx-s-open');

			});	
			
			/* ====  project active js ==== */
			var witrbslick = $('.Wiza_pro_active');				
				 if(witrbslick.length > 0){
				 witrbslick.slick({
					infinite: true,
					autoplay: true,
					autoplaySpeed: 2000,
					speed: 1000,					
					slidesToShow: 3,
					slidesToScroll: 1,
					arrows: true,
					dots: false,
					responsive: [
						{
							breakpoint: 1200,
							settings: {
								slidesToShow: 3,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 992,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 767,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							}
						}
						]
					});
					}
					 
			// Mouse Direction Hover Iffect
			$('.single_protfolio').directionalHover();

			$('.single_protfolio').directionalHover({
				// CSS class for the overlay
				overlay: "em_port_content",
				// Linear or swing
				easing: "swing",
				speed: 50
			});	
			
})(jQuery);




