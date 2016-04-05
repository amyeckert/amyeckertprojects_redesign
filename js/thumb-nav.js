;(function($) {

$(document).ready(function() {

//  Disable this for MOBILE  max-width: 340px

// ******** HELP ANDRE! SOMETHING IS NOT WORKING WITH THIS MEDIA QUERY PART 

 // var mq = window.matchMedia("(max-width: 340px)");
 // mq.addListener(function(match) {

 //    if (mq.matches == "(max-width: 340px)") {
    
        //do all this:
        /*-------------------------------------------------------------------------------------------------
                    previous or next button */

        $('.previous').on('click', function() {
  
            var imgCount = document.getElementById('thumbNav').getElementsByTagName('img').length;
            var items = document.querySelectorAll('div.item');

            //find the active item 
            var activeImg = document.querySelector('div.isActive');
            var lastImg = document.querySelector('div.thumbs-container').lastElementChild;  
            var firstImg = document.querySelector('div.thumbs-container').firstElementChild;
            var prevImg = document.querySelector('div.isActive').previousElementSibling;

            $('.item.isActive').removeClass('isActive');

            //if activeImg is first image in list
            if (activeImg == items[0]) {

                //get the url to inject into .big-img-container
                var chosen_thumb = $(lastImg).find('img').attr('src');
                $(lastImg).addClass('isActive');

                //make that img new big img.
                $('.big-img-container').attr('style', 'background-image: url('+chosen_thumb+')');

            }
            //else choose prev sibling
            else {      
                $(prevImg).addClass('isActive');
                var chosen_thumb = $(prevImg).find('img').attr('src');
                //make that img new big img.
                $('.big-img-container').attr('style', 'background-image: url('+chosen_thumb+')');
            }
                
            // console.log( mq );
            });

        $('.next').on('click', function() {

            var imgCount = document.getElementById('thumbNav').getElementsByTagName('img').length;
            var items = document.querySelectorAll('div.item');
            
            // find the active item 
            var activeImg = document.querySelector('div.isActive');
            var lastImg = document.querySelector('div.thumbs-container').lastElementChild;  
            var firstImg = document.querySelector('div.thumbs-container').firstElementChild;
            var prevImg = document.querySelector('div.isActive').previousElementSibling;

            $('.item.isActive').removeClass('isActive');

            //if activeImg is first image in list
            if(activeImg == items[0]) {

                //get the url to inject into .big-img-container
                var chosen_thumb = $(lastImg).find('img').attr('src');
                $(lastImg).addClass('isActive');

                //make that img new big img.
                $('.big-img-container').attr('style', 'background-image: url('+chosen_thumb+')');
            }

                //else choose prev sibling
                else {      
                    $(prevImg).addClass('isActive');
                    var chosen_thumb = $(prevImg).find('img').attr('src');
                    //make that img new big img.
                    $('.big-img-container').attr('style', 'background-image: url('+chosen_thumb+')');
                }

                // console.log(activeImg, imgCount, lastImg, prevImg, items);

            });

            /*-------------------------------------------------------------------------------------------------
                        pick a thumbnail  */

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
            /*-------------------------------------------------------------------------------------------------
                        hide all thumbnails */
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
    // } 
    // else {
    //     console.log( "crapola")
    // }
    
    
    
});
//________THE END____________________________________________________________________________________________________________________
});
})(jQuery);