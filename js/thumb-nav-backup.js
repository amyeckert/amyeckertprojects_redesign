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






carousel = (function(){

   // var box = document.querySelector('.thumbs-container');
   // identify next or prev button
   var nav = document.querySelector('.carousel-nav');
   var next = nav.querySelector('.next');
   var prev = nav.querySelector('.previous');
   //find isActive image
   var activeImg = document.querySelector('div.isActive'); 

   var items = document.getElementById('thumbNav').getElementsByTagName('img'); 

   var counter = 0;
   var amount = items.length;

   var current = items[0];

   items.classList.add('isActive');

   function navigate(direction) {
     current.classList.remove('isActive');

     counter = counter + direction;
     if (direction === -1 && 
         counter < 0) { 
       counter = amount - 1; 
     }
     if (direction === 1 && 
         !items[counter]) { 
       counter = 0;
     }
     current = items[counter];
     current.classList.add('isActive');
     }
     next.addEventListener('click', function(ev) {
     navigate(1);
     });
     prev.addEventListener('click', function(ev) {
     navigate(-1);
     });
     navigate(0);


  console.log(items, amount, activeImg)


  })();








// ;(function($) {


// $(document).ready(function(){

// /*-------------------------------------------------------------------
// view thumbnails button
// /*----------------------------------------------------------------------
// // when page is loaded/ready, show first image from sequence as default
// // when thumbnail button is clicked:
// 	// show thumbs container overlaid on top of big img, 
// 	// 	same positioning as big img- top left aligned.	
// 	// isActive big img is removed or hidden
// 	// When an .item (the image thumbnail) is clicked it hides thumbs container
// 	// displays clicked img in big img container.


// /*-------------------------------------------------------------------------------------------------
// thumbnail picker
// -------------------------------------------------------------------------------------------------*/
// $('.item').on('click', function(e) {
// 	e.preventDefault();
// 	$('.item.isActive').removeClass('isActive');
// 	$(this).addClass('isActive');
// 	console.log(e);

// 	// Figure out which thumbnail we should use
// 	var chosen_thumb = $(this).find('img').attr('src');
// 	console.log(chosen_thumb);
// 	//change visibility of  .thumbs to hidden
// 	document.getElementById("thumbs").style.visibility;

// 	// thumbs.hide()?
		

// 	}
// 	// $('.big-img-container').attr('style', {'background-image':chosen_thumb});
// 	$('.big-img-container').attr('style', 'background-image: url('+chosen_thumb+')');

// 	// only display Image Info div when a thumb is chosen. HIDE div when showing 
// 	// thumbnail view hide by changing color to #aba7a7, when visible.

// });	


// function carouselnav(event){
// 	console.log(event);

// 	// step 1- previous or next?
// 	// step 2 find the active item
// 	// step 3a if prev trigger a click on .item isActive previous sibling, prevSibling
// 	// 		3b if isActive i first in list, then do what? then find last .item
// 	// 	 	3c if next, trigger click on .item isActive nextSibling.
// 	//      3d if isActive is last in list then find first .item

// 	// Hide Image info div when "thumbnails" button is clicked
// }
// $('.carousel-nav .button').bind('click', carouselnav);





//________THE END____________________________________________________________________________________________________________________
});
})(jQuery);