


function lazyLoad($elm) {
	var $elm = $elm || $('.active img');
	var lazySrc = $elm.attr('data-lazy-src');
	var src = $elm.attr('src');
	
	//console.log('lazyLoad', $elm);
	
	if (src != lazySrc) {
		$elm.fadeTo('fast', 0.2, function() {
			$elm.css('background', 'url('+src+')');
			$elm.attr('src', lazySrc).bind('load', function() {
				$elm.removeClass('lazy').fadeTo('slow', 1);
			});
		});
	}
}

$('#set-carousel').on("slid", function() {
	window.location.hash = "#"+ parseInt($('.carousel-inner .item.active').index()+1);
	lazyLoad();
});

$(document).ready(function() {
  var url = document.location.toString();
	
	if (url.match('#')) {
			$('.carousel-inner .item.active').removeClass('active');
			$('.carousel-inner div:nth-child(' + url.split('#')[1] + ')').addClass('active');
	}

	lazyLoad();
});