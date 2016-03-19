











	// Animation
	//Documentation: http://daneden.github.io/animate.css/
	$(".class_block").animated("zoomIn");
	
	// The Animation When Viewing The Section
	$(".sect_").waypoint(function() {

		$(".sect_ .class_block").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.addClass("on");
			}, 200*index);
		});

	}, {
		offset : "20%"
	});


	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};


	// Fixing The Top Line
	$(window).scroll(function() {
		if ($(this).scrollTop() > 1){
			$(".class_block").addClass("sticky");
		}
		else{
			$(".class_block").removeClass("sticky");
		}
	});
	

	// Triggering a script at a certain resolution
	if ($(window).width() <= 768) {
		$(".top-mnu a").click(function() {
			$(".toggle-mnu").removeClass("on");
			$(".top-mnu").slideToggle();
		});
	};


	// Scroll to the block .div by clicking on .scroll
	// Documentation: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($(".class_block"), 800, {
			offset: -90
		});
	});

	// Scroll to the block .div by clicking on .scroll AND Backlight menu when scrolling
	// Documentation: http://manos.malihu.gr/page-scroll-to-id/
	$(".class_block a").mPageScroll2id({
		offset : 10,
		scrollSpeed : 1500
	});




	// Button Down Until The Element
	$(".class_btn").click(function() {
		$("html, body").animate({ scrollTop: $(".class_block").height()+120 }, "slow");
		return false;
	});
	
	// Button Up
	$(".class_btn").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});
	

	// Sidebar in the footer does not go beyond the border of the document and increases its
	$(".class_block .toggle-mnu").click(function() {
		$("html, body").animate({ scrollTop: $(document).height() }, "slow");
		return false;
	});
	

	// Slider OWL-2
	// Documentation: http://www.owlcarousel.owlgraphic.com/index.html
	$(".слайдер").owlCarousel({
		items : 1,
		nav : true,
		navText : "",
		loop : true,
		autoplay : true,
		autoplayHoverPause : true,
		fluidSpeed : 600,
		autoplaySpeed : 600,
		navSpeed : 600,
		dotsSpeed : 600,
		dragEndSpeed : 600
	});


	// Sky-Carousel
	// Documentation: http://www.skyplugins.com/sky-jquery-touch-carousel/documentation.html
	$('.sky-carousel').carousel({
		itemWidth: 300,
		itemHeight: 200,
		distance: 10,
		selectedItemDistance: 10,
		selectedItemZoomFactor: 1,
		unselectedItemZoomFactor: 0.95,
		unselectedItemAlpha: 0.5,
		motionStartDistance: 140,
		topMargin: 30,
		gradientStartPoint: 0.36,
		gradientOverlayColor: "#f5f5f5",
		gradientOverlaySize: 20,
		selectByClick: false
	});
	

	// Ajax Form Submit
	// Documentation: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
				// Or:
				$.magnificPopup.close();
				$("#form").trigger("reset");
			}, 1000);
		});
		return false;
	});
	
	
	// The PopUp Manager FancyBox
	// Documentation: http://fancybox.net/howto
	// <a class="fancybox"><img src="image.jpg" /></a>
	// <a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();
	

	// Magnific PopUp
	// Documentation: http://dimsemenov.com/plugins/magnific-popup/
	$(".section-class .btn-class").click(function() {
		$("#вызываемый_блок").html($(this).text());
		$("#вызываемый_блок input[name=formname]").val($(this).text());
	}).magnificPopup({
		type:"inline",
		// mainClass: "mfp-fade",
		midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
	});


	// CountDown Timer
	// Documentation: http://keith-wood.name/countdown.html
	// <div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});


	// Stellar - Parallax Plugin
	// Documentation: https://github.com/markdalgleish/stellar.js
	// HTML: <div class="parallax" data-stellar-background-ratio="0.5"></div>
	$.stellar({
		horizontalScrolling: false,
		verticalOffset: 40
	});


	// EqualHeight - Equal Height Columns
	// Example Of a List of Items:
	// var eqElement = ".cat_container > div, .home_news > div"
	var eqElement = ".element"
	$(window).load(function(){equalheight(eqElement);}).resize(function(){equalheight(eqElement);});







		// Reload When Resize The Window

	//	$(window).resize(function(){
	//		window.setTimeout('location.reload()', 500);
	//	});



		// If the scale changes, the size of the background image is not changed

	//	function wResize() {
	//		$("Класс").css("min-height", $(window).height());
	//	};
	//	wResize();
	//	$(window).resize(function() {
	//		wResize()
	//	}); 



		//Chrome Smooth Scroll

	//	try {
	//		$.browserSelector();
	//		if($("html").hasClass("chrome")) {
	//			$.smoothScroll();
	//		}
	//	} catch(err) {
	//
	//	};
	//
	//	$("img, a").on("dragstart", function(event) { event.preventDefault(); });