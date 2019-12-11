$(document).ready(function(){
	var left = true;
	$('.center').on('click', function () {
		if (left === true) {
				 $( ".white-circle" ).css('left','-130px');
			
			left = false;
		} else {
				 $( ".white-circle" ).css('left','-555px');
			
			left = true;
		}
	});
	
	$('.india-office>img:first-child').on('click', function () {
	     $( "#Full_map,#india,#canada,#Jersey" ).removeAttr('class');
	     $( "#Full_map,#Jersey,#canada" ).addClass('d-none');
	     $( "#india" ).addClass('d-block');
	});
	
	$('.nj-office>img:first-child').on('click', function () {
	     $( "#Full_map,#india,#canada,#Jersey" ).removeAttr('class');
	     $( "#Full_map,#india,#canada" ).addClass('d-none');
	     $( "#Jersey" ).addClass('d-block');
	});
	
	$('.canada_office>img:first-child').on('click', function () {
	     $( "#Full_map,#india,#canada,#Jersey" ).removeAttr('class');
	     $( "#Full_map,#india,#Jersey" ).addClass('d-none');
	     $( "#canada" ).addClass('d-block');
	});
	
	
	
	$('.our-client').viewportChecker({
	    classToAdd: 'visible animated bounce',
        offset:400
	});
	$('footer .container').viewportChecker({
	    classToAdd: 'visible animated rotateIn',
        offset: 400
	});
	$('.border-class').viewportChecker({
	    classToAdd: 'visible animated zoomInUp',
        offset: 400
	});
	$('.service').viewportChecker({
	    classToAdd: 'visible animated flipInX',
        offset: 400
	});
	$('section.about-us').viewportChecker({
	    classToAdd: 'visible animated fadeInDown',
        offset: 400
	});
	$('.blog-post').viewportChecker({
	    classToAdd: 'visible animated jackInTheBox',
        offset: 400
	});
	$('.client_slider').viewportChecker({
	    classToAdd: 'visible animated bounceInRight',
        offset: 100
	});
	$('.our-client-say .zoom.tabs_btn').viewportChecker({
	    classToAdd: 'visible animated bounceInLeft',
        offset: 400
	});
	$('.how-different').viewportChecker({
	    classToAdd: 'visible animated flipInY',
        offset: 400
	});
	
	
	
	$('.loop').owlCarousel({
		items:2,
		loop:true,
		autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
		margin:1.35,
		responsive:{
			320:{
				items:1
			},
			480:{
				items:2
			},
			767:{
				items:3
			},
			991:{
				items:4
			},
			1024:{
				items:5
			}
		}
	});



});	