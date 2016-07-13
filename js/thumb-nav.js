;(function($) {

    $(document).ready(function() {

        var width = screen.availWidth;
        var height = screen.availHeight;

        // init Masory
        var $grid = $('.grid').masonry({
          itemSelector: '.grid-item',
          percentPosition: true,
          columnWidth: '.grid-sizer'
        });
        // layout Isotope after each image loads
        $grid.imagesLoaded().progress( function() {
          $grid.masonry();
        });


        function thumbnailNav() {
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
                var nextImg = document.querySelector('div.isActive').nextElementSibling;

                $('.item.isActive').removeClass('isActive');

                //if activeImg is first image in list
                if(activeImg == items[0]) {

                    //get the url to inject into .big-img-container
                    var chosen_thumb = $(nextImg).find('img').attr('src');
                    $(nextImg).addClass('isActive');

                    //make that img new big img.
                    $('.big-img-container').attr('style', 'background-image: url('+chosen_thumb+')');
                }

                //if activeImg is last image in list
                else if (activeImg === lastImg) {
                    //get the url to inject into .big-img-container
                    var chosen_thumb = $(firstImg).find('img').attr('src');
                    $(firstImg).addClass('isActive');

                    //make that img new big img.
                    $('.big-img-container').attr('style', 'background-image: url('+chosen_thumb+')');


                }
                //else choose next sibling
                else {      
                    $(nextImg).addClass('isActive');
                    var chosen_thumb = $(nextImg).find('img').attr('src');
                    //make that img new big img.
                    $('.big-img-container').attr('style', 'background-image: url('+chosen_thumb+')');
                }
                console.log (nextImg)
            });

            /*-------------------------------------------------------------------------------------------------
                when a thumbnail is clicked on / hides thumbnail grid / shows image big */

            $('.item').on('click', function(e) {
                e.preventDefault();
                $('.item.isActive').removeClass('isActive');
                $(this).addClass('isActive');
                console.log(e);

                // Figure out which thumbnail is chosen
                var chosen_thumb = $(this).find('img').attr('src');
                var carousel = document.getElementById('carousel');

                $('.big-img-container').attr('style', 'background-image: url('+chosen_thumb+')');

                // Change visibility of .thumbs to hidden and hide statement-body
                var thumbs = document.getElementById('thumbNav');
                var cNav = document.getElementById('cNav');
                var imgInfo = document.getElementById('imgInfo');
                var previous = document.getElementById('prevImg');
                var next = document.getElementById('nextImg');
                // var showHideStatement = document.querySelector('statement-body');

                carousel.style.display = 'block';
                carousel.style.width = '100%';
                 
                bigImg.style.visibility = 'visible';
                cNav.style.visibility = 'visible';
                thumbs.style.display =  'none';

                imgInfo.style.visibility = 'hidden';
                prevImg.style.visibility = 'visible';
                nextImg.style.visibility = 'visible';
                // showHideStatement.display = 'none';

                console.log(chosen_thumb, bigImg, imgInfo);
            }); 
            /*-------------------------------------------------------------------------------------------------
                hides big image/ shows thumbs grid */
                            
            $('.thumbs-only').on('click', function() {

                var carousel = document.getElementById('carousel');
                var showThumbs = document.getElementById('thumbNav');
                var imgInfo = document.getElementById('imgInfo');
                var previous = document.getElementById('prevImg');
                var next = document.getElementById('nextImg');
                var clNav = document.getElementById('cNav');
                var grid = document.querySelector('grid');
                // var showHideStatement = document.getElementById('statement-body');
                
                carousel.style.display = 'none';
                showThumbs.style.display = 'block';
                imgInfo.style.visibility = 'hidden';
                cNav.style.visibility = 'hidden';
                prevImg.style.visibility = 'hidden';
                nextImg.style.visibility = 'hidden';
                // showHideStatement.display = 'none';

            });
            /*-------------------------------------------------------------------------------------------------
                  SHOW / HIDE STATEMENT click BUTTON  COMING SOON!! */
    

            console.log( width, height );
        }

        if ( width >= 700 ) {
            thumbnailNav();
        }   
    

//________THE END______________________________________________________________________________________________________________
});
})(jQuery);
