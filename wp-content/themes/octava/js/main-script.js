function updateWrapper() {
    var hscreen = $(window).height(),
        hfoot = $(".footer-wrapper").outerHeight();
    $("#wrapper").css({marginBottom:-hfoot});
	$('.pushContainer').css({height:hfoot});
}

jQuery(document).ready(function () {
	updateWrapper();
	jQuery(window).resize(function() {
		updateWrapper();
	});
});

$(document).ready(function () {
	$('.nav-container .nav').meanmenu();
});

jQuery(document).ready(function () {
	updateContainer();
	jQuery(window).resize(function() {
		updateContainer();
	});
});
function updateContainer() {
	jQuery('.inner-menu').next().remove('a.mean-expand');
}

equalheight = function(container){

var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;
 $(container).each(function() {

   $el = $(this);
   $($el).height('auto')
   topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0;
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
}

$(window).load(function() {
	equalheight('.eqlHeight');
});

$(window).resize(function(){
	equalheight('.eqlHeight');
});

$(window).load(function() {
	$('body, #wrapper, .footer-wrapper').css({opacity:1});	
});

$(document).ready(function() {	
	$('.homeBannerSlider').slick({
		dots: false,
		speed: 2000,
		arrows: true,
		autoplay: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		pauseOnHover: false,
		autoplaySpeed: 3000,
		asNavFor: '.banner-nav-thumbnails',
	});
	
	$('.banner-nav-thumbnails').slick({
		dots: false,
		arrows: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		focusOnSelect: true,
		accessibility: false,
		asNavFor: '.homeBannerSlider',
	});
	
	$('.portfolioSlider').slick({
		dots: false,
		speed: 2000,
		arrows: true,
		autoplay: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		pauseOnHover: false,
		autoplaySpeed: 3000,
	});
	
	$('.fancybox').fancybox({
		padding:0,
		helpers : {
			title : {
				type : 'outside'
			}
		}
	});
	
	//Horizontal Tab
	$('#parentHorizontalTab').easyResponsiveTabs({
		type: 'default', //Types: default, vertical, accordion
		width: 'auto', //auto or any width like 600px
		fit: true, // 100% fit in a container
		tabidentify: 'hor_1', // The tab groups identifier
		activate: function(event) { // Callback function if tab is switched
			var $tab = $(this);
			var $info = $('#nested-tabInfo');
			var $name = $('span', $info);
			$name.text($tab.text());
			$info.show();
		}
	});
	
	jQuery().UItoTop({ easingType: 'easeOutQuart' });
});