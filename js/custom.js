$(window).on('scroll', function() {
	
	"use strict";

	var b = $(window).scrollTop();
	
	if( b > 80 ){		
		$(".wsmainfull").addClass("scroll");
	} else {
		$(".wsmainfull").removeClass("scroll");
	}				

});