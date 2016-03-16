;(function($) {


$(document).ready(function(){

/*-------------------------------------------------------------------
view thumbnails button
/*----------------------------------------------------------------------
// when page is loaded/ready, show first image from sequence as default
// when thumbnail button is clicked:
	// show thumbs container overlaid on top of big img, 
	// same positioning as big img- top left aligned.	
	// isActive big img is removed or hidden
	// When an .item (the image thumbnail) is clicked it hides thumbs container
	// displays clicked img in big img container.


/*-------------------------------------------------------------------------------------------------
thumbnail picker
-------------------------------------------------------------------------------------------------*/
$('.item').on('click', function(e) {
	e.preventDefault();
	$('.item.isActive').removeClass('isActive');
	$(this).addClass('isActive');
	console.log(e);

	// Figure out which thumbnail we should use
	var chosen_thumb = $(this).find('img').attr('src');
	console.log(chosen_thumb);

	// $('.big-img-container').attr('style', {'background-image':chosen_thumb});
	$('.big-img-container').attr('style', 'background-image: url('+chosen_thumb+')');

	// only display Image Info div when a thumb is chosen. HIDE div when showing 
	// thumbnail view hide by changing color to #aba7a7, when visible.

});	

function carouselnav(event){
	console.log(event);
	// step 1- previous or next?
	// step 2 find the active item
	// step 3a if prev trigger a click on .item isActive previous sibling, prevSibling
	// 		3b if isActive i first in list, then do what? then find last .item
	// 	 	3c if next, trigger click on .item isActive nextSibling.
	//      3d if isActive is last in list then find first .item

	// Hide Image info div when "thumbnails" button is clicked
}
$('.carousel-nav .button').bind('click', carouselnav);






});
})(jQuery);