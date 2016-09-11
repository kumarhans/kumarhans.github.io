$(document).ready(function() {
    $('.nav-tab').hover(function() {
        $(this).animate({ fontSize: "4em" }, 100);
    });
    $('.nav-tab').mouseleave(function() {
    	$(this).animate({ fontSize: "3em" }, 100);
    });
    $('#titleHeading').fadeTo(2000,1).animate({ fontSize: "23em" }, 500).animate({ fontSize: "15em" }, 1500).delay(5000 , function() {
        // Callback function: This is called when 'animation-one'
        // is finished.
        $('#titleinfo').fadeTo(3000,1);
    });
    
     
});

