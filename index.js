

$(document).ready(function() {
    $('.popy').hover(function() {
        $(this).animate({ fontSize: "3.5em" }, 100);
        $(this).parent().addClass("active");
    });

    $('.popy').mouseleave(function() {
    	$(this).animate({ fontSize: "3em" }, 100);
    	$(".nav").find(".active").removeClass("active");
    });

  	$('.glitch').glitch({
  		offset: [0, 12],
	});

    $('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing');
	});

	$(".nav a").on("click", function(){
   		$(".nav").find(".active").removeClass("active");
	});

    $('#titleinfo').fadeTo(500,1).delay(1000 , function() {
        $('#one').fadeTo(500,1);
        $('#two').fadeTo(3000,1);
        $('#three').fadeTo(4000,1);
        $('#four').fadeTo(5000,1);
    });
     
});

