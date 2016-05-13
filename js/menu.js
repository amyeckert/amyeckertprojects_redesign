$(document).ready(function() {

	var width = screen.availWidth;
    var height = screen.availHeight;

	function toggleMenu() {	
		
	// Show the horizontal menu
	    $('.menu-toggle').click(function(e){

	        var menu = $(this).data('show-dialog');

	        $('.' + menu).slideToggle('fast');
	    });

	    $('.options-menu-horizontal span.close-menu').click(function(){

	        $(this).closest('.options-menu-horizontal').slideUp('fast');
		});
	}

	if ( width <= 650 ) {
        toggleMenu();
    }

});