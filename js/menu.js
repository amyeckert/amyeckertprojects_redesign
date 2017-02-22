
$(document).ready(function() {

	var width = screen.availWidth;
    var height = screen.availHeight;

	function toggleMainMenu() {	

		// Show the mobile nav menu
	    $('.menu-toggle').click(function(e){

	        var menu = $(this).data('show-dialog');

	        $('.' + menu).slideToggle('fast');
	    });

	    $('.options-menu-horizontal').click(function(){

	        $(this).closest('.options-menu-horizontal').slideUp('fast');
		});
	}
	toggleMainMenu();
});
