/* jshint devel:true */

'use strict';

// Script para recolher a navegação ao tocar no botão, na versão mobile

$(document).ready(function () {
	$('.navbar-nav li a').click(function() {
		$('.navbar-collapse').removeClass('in').addClass('collapse');
	});
});


// Scripts para criar offset nas ancoras + animação suave na rolagem

var offsetHeightMobile = 88;
var offsetHeightDesktop = 200;
var mobileScreen = matchMedia('(max-width:991px)');
var desktopScreen = matchMedia('(min-width:992px)');

	// Mobile

var offsetScrollMobile = function () {
	if (mobileScreen.matches) {
		$('.navbar-nav li a, .l-navbar__logo, .btn-default').click(function () {
			var scrollPos = $('body').find($(this).attr('href')).offset().top - offsetHeightMobile;
			$('body,html').animate({
				scrollTop: scrollPos
			}, 800);
			return false;
		});
	}
};

offsetScrollMobile();

	// Desktop

var offsetScrollDesktop = function () {
	if (desktopScreen.matches) {
		$('.navbar-nav li a, a.l-navbar__logo, .btn-default').click(function () {
			var scrollPos = $('body').find($(this).attr('href')).offset().top - offsetHeightDesktop;
			$('body,html').animate({
				scrollTop: scrollPos
			}, 800);
			return false;
		});
	}
};

offsetScrollDesktop();

// Script para gerar o botão de scrollup

$(function () {
	$.scrollUp({
		scrollName: 'scrollUp', // Element ID
		scrollDistance: 300, // Distance from top/bottom before showing element (px)
		scrollFrom: 'top', // 'top' or 'bottom'
		scrollSpeed: 600, // Speed back to top (ms)
		easingType: 'linear', // Scroll to top easing (see http://easings.net/)
		animation: 'fade', // Fade, slide, none
		animationSpeed: 200, // Animation speed (ms)
		scrollTrigger: false, // Set a custom triggering element. Can be an HTML string or jQuery object
		scrollTarget: false, // Set a custom target element for scrolling to. Can be element or number
		scrollText: '<span class="top-en">Top</span><span class="top-pt">Topo</span>', // Text for element, can contain HTML
		scrollTitle: false, // Set a custom <a> title if required.
		scrollImg: false, // Set true to use image
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
		zIndex: 2147483647 // Z-Index for the overlay
	});
});