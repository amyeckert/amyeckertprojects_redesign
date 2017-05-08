
$(document).ready(function() {
	// $('.menu-toggle').hide();
	var width = screen.availWidth;
    var height = screen.availHeight;

	function toggleMainMenu() {		
	    $('.menu-toggle').click(function(e){
	        var menu = $(this).data('show-dialog');
	        $('.' + menu).slideToggle(300, 'swing');
	    });
	    $('.options-menu-horizontal').click(function(){
	        $(this).closest('.options-menu-horizontal').slideUp(300, 'swing');
		});
	}
	if(width <= 1024) {
		toggleMainMenu();
	}else{
		$('.menu-toggle').hide
	}
});
