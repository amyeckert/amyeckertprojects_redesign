;(function($) {


$(document).ready(function(){



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

	//change visibility of  .thumbs to hidden
	var thumbs = document.getElementById('thumbNav');
	//____________________________________________________________________________________
	//specify breakpoint where this happens if minwidth<= xpx (display=flex) else {display=none}
	//_____________________________________________________________________________________
	thumbs.style.display =  'none';
	
	var cNav = document.getElementById('cNav');
	cNav.style.visibility = 'visible';

	var imgInfo = document.getElementById('imgInfo');
	imgInfo.style.visibility = 'visible';

	// only display Image Info div when a thumb is chosen. HIDE div when showing 
	// thumbnail view hide by changing color to #aba7a7, when visible.

});	



// Hide Image info div when "thumbnails" button is clicked
$('.thumbs-only').on('click', function() {

	var bigImg = document.getElementById('bigImg');
	var showThumbs = document.getElementById('thumbNav');
	var imgInfo = document.getElementById('imgInfo');

	bigImg.style.visibility = 'hidden';
	showThumbs.style.display = 'block';

	imgInfo.style.visibility = 'hidden';
})



// _______PREVIOUS OR NEXT IMAGE:______________

// step 1- previous or next?
// step 2 find the active item
//step 3a if prev trigger an click on .item isActive previous sibling, prevSibling
// step 3a if prev trigger a click on .item isActive previous sibling, prevSibling
// 		3b if isActive is first in list, then do what? then find last .item
// 	 	3c if next, trigger click on .item isActive nextSibling.
//      3d if isActive is last in list then find first .item

});
})(jQuery);