;(function($) {


$(document).ready(function(){


// _______PREVIOUS OR NEXT IMAGE Navigation ______________

// step 1- previous or next button clicked?
// step 2 find the active item

//step 3a if prev triggers a click on .item isActive previous sibling, 
//step 3a if next triggers a click on .item isActive next sibling, 
// 		3b if isActive is first in list, then find last .item
// 	 	3c if next, trigger click on .item isActive nextSibling.
//      3d if isActive is last in list then find first .item

$('.previous').on('click', function() {
	// makes big image visible
	var bigImg = document.getElementById('bigImg');
	bigImg.style.visibility = 'visible';

	var imgCount = document.getElementById('thumbNav').getElementsByTagName('img').length;
	// step 2 find the active item and chose next sibling
	var prevImg = document.querySelector('div.isActive').previousElementSibling;
	$('.item.isActive').removeClass('isActive');
	$(prevImg).addClass('isActive');

	var chosen_thumb = $(prevImg).find('img').attr('src');

	$('.big-img-container').attr('style', 'background-image: url('+chosen_thumb+')');

});

$('.next').on('click', function() {
	// makes big image visible
	var bigImg = document.getElementById('bigImg');
	bigImg.style.visibility = 'visible';

	var imgCount = document.getElementById('thumbNav').getElementsByTagName('img').length;
	 // step 2 find the active item and chose next sibling
	var nextImg = document.querySelector('div.isActive').nextElementSibling;
	$('.item.isActive').removeClass('isActive');
	$(nextImg).addClass('isActive');
	var chosen_thumb = $(nextImg).find('img').attr('src');

	//makes that img new big img.
	$('.big-img-container').attr('style', 'background-image: url('+chosen_thumb+')');

});

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

	$('.big-img-container').attr('style', 'background-image: url('+chosen_thumb+')');

	//change visibility of .thumbs to hidden
	var thumbs = document.getElementById('thumbNav');
	//____________________________________________________________________________________
	//specify breakpoint where this happens if minwidth<= xpx (display=flex) else {display=none}
	//_____________________________________________________________________________________
	thumbs.style.display =  'none';
	
	var cNav = document.getElementById('cNav');
	cNav.style.visibility = 'visible';

	var imgInfo = document.getElementById('imgInfo');
	imgInfo.style.visibility = 'visible';

});	

// Hides Image info div when "thumbnails" button is clicked
$('.thumbs-only').on('click', function() {

	var bigImg = document.getElementById('bigImg');
	var showThumbs = document.getElementById('thumbNav');
	var imgInfo = document.getElementById('imgInfo');

	bigImg.style.visibility = 'hidden';
	showThumbs.style.display = 'block';
	imgInfo.style.visibility = 'hidden';
})


//https://www.christianheilmann.com/2015/04/08/keeping-it-simple-coding-a-carousel/ :
// carousel = (function(){
//   //find buttons for next/prev"
//   var box = document.querySelector('div.carousel-nav');
//   var next = document.querySelector('button.nextImg');
//   var prev = document.querySelector('button.prevImg');

//   //finds container with images in it-
//   var items = document.querySelectorAll('div.item');
//   var counter = 0;
//   var amount = items.length;
//   var current = items[0];

//   items.classList.add('isActive');

//   function navigate(direction) {
//     current.classList.remove('isActive');
//     counter = counter + direction;
//     if (direction === -1 && 
//         counter < 0) { 
//       counter = amount - 1; 
//     }
//     if (direction === 1 && 
//         !items[counter]) { 
//       counter = 0;
//     }
//     current = items[counter];
//     current.classList.add('isActive');
//   }
//   next.addEventListener('click', function(ev) {
//     navigate(1);
//   });
//   prev.addEventListener('click', function(ev) {
//     navigate(-1);
//   });
//   navigate(0);
// }) ();






















//___________________________________________
});
})(jQuery);