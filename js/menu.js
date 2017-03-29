
$(document).ready(function() {

	var width = screen.availWidth;
    var height = screen.availHeight;

	function toggleMainMenu() {	

		// Show the mobile nav menu
	    $('.menu-toggle').click(function(e){
	
	        var menu = $(this).data('show-dialog');

	        $('.' + menu).slideToggle(300, 'swing');
	    });

	    $('.options-menu-horizontal').click(function(){
	 
	        $(this).closest('.options-menu-horizontal').slideUp(300, 'swing');
		});
	}
	toggleMainMenu();
});
