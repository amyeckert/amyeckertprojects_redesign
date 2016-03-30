;(function($) {


$(document).ready(function(){


// _______PREVIOUS OR NEXT IMAGE Navigation ______________

//if prev button clicked, find .item current's previous sibling, which becomes current.
//if current is first in list, then find last .item

$('.previous').on('click', function() {

	var imgCount = document.getElementById('thumbNav').getElementsByTagName('img').length;
	
	// step 2 find the active item 
	var activeImg = document.querySelector('div.current');
	var lastImg = document.querySelector('div.thumbs-container').lastElementChild;	
	var firstImg = document.querySelector('div.thumbs-container').firstElementChild;
	var prevImg = document.querySelector('div.current').previousElementSibling;

	$('.item.current').removeClass('current');

		//if activeImg is first image in list
		if(activeImg == imgCount[0]) {
			//make lastImg .current
			lastImg=lastImg.addClass('current');

			//get the src url to inject into .big-img-container
			var chosen_thumb = $(lastImg).find('img').attr('src');

			//make that img new big img.
			$('.big-img-container').attr('style', 'background-image: url('+chosen_thumb+')');

		}
		//else choose prev sibling
		else { 		
			$(prevImg).addClass('current');
			var chosen_thumb = $(prevImg).find('img').attr('src');
			//make that img new big img.
			$('.big-img-container').attr('style', 'background-image: url('+chosen_thumb+')');}

	console.log(activeImg, imgCount, lastImg, prevImg);
});

// if next button clicked, triggers a click on .item current's next sibling, which becomes current 
// if current is last in list then find first .item

$('.next').on('click', function() {
	
	var imgCount = document.getElementById('thumbNav').getElementsByTagName('img').length;
	 // step 2 find the active item and chose next sibling
	var nextImg = document.querySelector('div.current').nextElementSibling;
	$('.item.current').removeClass('current');
	$(nextImg).addClass('current');
	var chosen_thumb = $(nextImg).find('img').attr('src');

	var lastImg = document.querySelector('div.thumbs-container').lastElementChild;
	var firstImg = document.querySelector('div.thumbs-container').firstElementChild;

	
	//make that img new big img.
	$('.big-img-container').attr('style', 'background-image: url('+chosen_thumb+')');
	
	console.log(imgCount, lastImg, firstImg);

});
/*-------------------------------------------------------------------------------------------------
thumbnail picker
-------------------------------------------------------------------------------------------------*/
$('.item').on('click', function(e) {
	e.preventDefault();
	$('.item.current').removeClass('current');
	$(this).addClass('current');
	console.log(e);

	// Figure out which thumbnail we should use
	var chosen_thumb = $(this).find('img').attr('src');
	console.log(chosen_thumb);

	$('.big-img-container').attr('style', 'background-image: url('+chosen_thumb+')');

	//change visibility of .thumbs to hidden
	var thumbs = document.getElementById('thumbNav');
	var cNav = document.getElementById('cNav');
	var imgInfo = document.getElementById('imgInfo');
	var previous = document.getElementById('prevImg');
	var next = document.getElementById('nextImg');

	cNav.style.visibility = 'visible';
	thumbs.style.display =  'none';
	imgInfo.style.visibility = 'hidden';
	prevImg.style.visibility = 'visible';
	nextImg.style.visibility = 'visible';

});	

// Hides Image info div, prev/next buttons when "thumbnails" button is clicked
$('.thumbs-only').on('click', function() {

	var bigImg = document.getElementById('bigImg');
	var showThumbs = document.getElementById('thumbNav');
	var imgInfo = document.getElementById('imgInfo');
	var previous = document.getElementById('prevImg');
	var next = document.getElementById('nextImg');
	var carouselNav = document.querySelector('div.carousel-nav');

	bigImg.style.visibility = 'hidden';
	showThumbs.style.display = 'block';
	imgInfo.style.visibility = 'hidden';
	carouselNav.style.visibility = 'hidden';
	prevImg.style.visibility = 'hidden';
	nextImg.style.visibility = 'hidden';

});


//________THE END____________________________________________________________________________________________________________________
});
})(jQuery);