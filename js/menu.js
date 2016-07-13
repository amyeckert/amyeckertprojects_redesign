
$(document).ready(function() {

	var width = screen.availWidth;
    var height = screen.availHeight;

	function toggleMainMenu() {	

		// Show the main nav menu
	    $('.menu-toggle').click(function(e){

	        var menu = $(this).data('show-dialog');

	        $('.' + menu).slideToggle('fast');
	    });

	    $('.options-menu-horizontal span.close-menu').click(function(){

	        $(this).closest('.options-menu-horizontal').slideUp('fast');
		});
	}

	toggleMainMenu();

	// if ( width <= 650 ) {
 //        toggleMainMenu();
// };        
});