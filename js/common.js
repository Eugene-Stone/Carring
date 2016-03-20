$(document).mouseup(function (e){ 

	// // Button Drop Down Menu
	// $(".main-mnu-btn").click(function() {
	// 	$(".main-mnu-box").fadeIn();
	// 	$(".home-mnu-box").fadeIn();
	// 	//$(".top-mnu").slideToggle();
	// });
	// 
	// var div = $(".main-mnu-btn, .main-mnu-box, .home-mnu-box"); // тут указываем ID элемента
	// if (!div.is(e.target) // если клик был не по нашему блоку
	// 		&& div.has(e.target).length === 0) { // и не по его дочерним элементам
	// 		$(".main-mnu-box, .home-mnu-box").fadeOut(); // скрываем его
	// };

	// Russia Map
	$("area").click(function() {
		$(this).toggleClass("on");
		$(".s-info").fadeIn(); return false;
	});

	var div = $(".s-info"); // тут указываем ID элемента
	if (!div.is(e.target) // если клик был не по нашему блоку
			&& div.has(e.target).length === 0) { // и не по его дочерним элементам
		$(".s-info").fadeOut(); // скрываем его
	}; // Russia Map END


});


$(document).ready(function() {

	// Select
	$(function() {
		$( ".cust-select, .city-s, .spares, .all-russ, .view-prod, .date-sort, .u-phone-s, .u-region-s, .u-city-s, .msg-f-s")
		.selectmenu()
		.selectmenu( "menuWidget" )
		.addClass( "overflow" );
	});

	// Radio
	$(function() {
		$( ".sort-res-1, .sort-res-2, .review-button" ).buttonset();
	});

	$(".squares-sort").click(function() {
		$(".result-item").removeClass("s-list");
		$(".result-item").addClass("s-squares");
	});

	$(".list-sort").click(function() {
		$(".result-item").removeClass("s-squares");
		$(".result-item").addClass("s-list");
	});

	// Hidden fields
	$(".adv-phone").click(function (e) {
		e.preventDefault()
		$(".adv-phone-hidd").fadeOut();
		$(".adv-phone-on").addClass("on");
	});

	$(".adv-pos").click(function (e) {
		e.preventDefault()
		$(".adv-pos-hidd").fadeOut();
		$(".adv-pos-on").addClass("on");
	});

	// Massege check
	$(".msg-pick").click(function() {
		$(this).toggleClass("checked");
		$(this).parents(".msg-item").toggleClass("active");
	});

	$(".msg-pick-all .check-off").click(function() {
		$(this).removeClass("on");
		$(this).addClass("hidd");
		$(".msg-pick-all .checked").removeClass("hidd");
		$(".msg-pick-all .checked").addClass("on");
		$(".msg-pick").addClass("checked");
		$(".msg-item").addClass("active");
	});

	$(".msg-pick-all .checked").click(function() {
		$(this).removeClass("on");
		$(this).addClass("hidd");
		$(".msg-pick-all .check-off").removeClass("hidd");
		$(".msg-pick-all .check-off").addClass("on");
		$(".msg-pick").removeClass("checked");
		$(".msg-item").removeClass("active");
	});





});