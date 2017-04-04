;(function($) {

    $(document).ready(function() {

        //----- update copyright site-wide -----------------------//
        var date = new Date();
        var year = date.getFullYear();

        var copyright = $('p.copyright').text();
        var copyrightNotice = 'All images © ' + year + ' Amy Eckert';
        $('p.copyright').html(copyrightNotice);   

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

        //clear big image caption
        $('.big-img-container > figcaption').remove();

        //  GLOBAL VARIABLES---------------------------//
        var width = screen.availWidth;
        var height = screen.availHeight;
        var statement = document.querySelector('.statement');
        var statementBody =document.querySelector('.statement-body');
        var carousel =document.querySelector('.carousel');
        var showThumbs = document.getElementById('thumbGrid');
        // var imgInfo = document.getElementById('imgInfo');
        var previous = document.getElementById('prevImg');
        var next = document.getElementById('nextImg');
        var cNav = document.getElementById('cNav');
        var grid = document.querySelector('.grid');
        var thumbs = document.getElementById('thumbGrid');
        var newImageCaption = document.querySelector('.big');


        var updateCaption = function() {
            //get contents of current image info <p>s
            var chosenImageCaption = document.querySelector('.isActive > figcaption');
            var chosenImageDetails = $('.isActive > figcaption').children(); //make an array
            var imageTitle = $(chosenImageDetails[0]).text();
            var imageDate = $(chosenImageDetails[1]).text();
            var imageDimensions = $(chosenImageDetails[2]).text();
            var imageMedia = $(chosenImageDetails[3]).text();
            var imageClient = $(chosenImageDetails[4]).text();

            $(newImageCaption).append('<figcaption class="image-info" id="imgInfo"><p class="title">' + imageTitle + '</p><p class="date">' + imageDate + '</p><p class="dimensions">' + imageDimensions + '</p><p class="media">' + imageMedia + '</p><p class="client">' + imageClient + '</p></figcaption>');   

        }
        //-------------- toggle statement text -----------------------------------//
        $('.statement').on('click', function(e) {
            e.preventDefault();
            $(statementBody).toggle();
        });
       
        // behaviour for tablet and desktop only ---------------------------------------------------//
        if (width >= 700 ) {
            $('.next').hide();
            $('.previous').hide();
            $('.thumbs-only').hide();
            
         /*--------------------------------
            when a thumbnail is clicked on-hides thumbnail grid 
             -shows #carousel and carousel nav buttons, updates caption-------------------------*/

            $('.item').on('click', function(e) {
                e.preventDefault();
                // empty big image caption info
                $('.big > figcaption').remove();
                // console.log(newImageCaption);

                $('.thumbs-only').show();
                $('.next').show();
                $('.previous').show();

                $('.item.isActive').removeClass('isActive');
                $(this).addClass('isActive');
                // console.log(e);

                // Figure out which thumbnail is chosen
                var chosenThumb = $(this).find('img').attr('src');
                var header = document.querySelector('header')
                $('header').removeClass('nav-up').addClass('nav-down');

                $('.big-img-container').attr('style', 'background-image: url('+chosenThumb+')');
                
                // change caption
                updateCaption();

                carousel.style.display = 'block';
                carousel.style.order = 3;
                carousel.style.width = '100%';

                // Change visibility of .thumbs to hidden 
                thumbs.style.display = 'none';
                cNav.style.order = 4; 
                cNav.style.visibility = 'visible';

                $('.next').show();
                $('.previous').show();
                $('.thumbs-only').show();

                imgInfo.style.visibility = 'visible';
                prevImg.style.visibility = 'visible';
                nextImg.style.visibility = 'visible';
                statement.style.order = 5;

            });
            /*-------------------------------------------------------------------------------------------------
                previous or next button */

            $('.previous').on('click', function() {
                //clear bigImage caption details
                $('.big> figcaption').remove();
                console.log(newImageCaption);

                var imgCount = document.getElementById('thumbGrid').getElementsByTagName('img').length;
                var items = document.querySelectorAll('figure.item');

                //find the active item 
                var activeImg = document.querySelector('figure.isActive');
                var lastImg = document.querySelector('div.thumbs-container').lastElementChild;  
                var firstImg = document.querySelector('div.thumbs-container').firstElementChild;
                var prevImg = document.querySelector('figure.isActive').previousElementSibling;

                $('.item.isActive').removeClass('isActive');

                //if activeImg is first image in list
                if (activeImg == items[0]) {

                    //get the url to inject into .big-img-container
                    var chosenThumb = $(lastImg).find('img').attr('src');
                    $(lastImg).addClass('isActive');

                    //make that img new big img.
                    $('.big-img-container').attr('style', 'background-image: url('+chosenThumb+')');
                }
                //else choose prev sibling
                else {      
                    $(prevImg).addClass('isActive');
                    var chosenThumb = $(prevImg).find('img').attr('src');
                    //make that img new big img.
                    $('.big-img-container').attr('style', 'background-image: url('+chosenThumb+')');
                }
                // update to current figcaption
                updateCaption();                  
            });
 
            $('.next').on('click', function() {
                // remove the last figcaption 
               $('.big > figcaption').remove();
                console.log(newImageCaption);

                var imgCount = document.getElementById('thumbGrid').getElementsByTagName('img').length;
                var items = document.querySelectorAll('figure.item');
                
                // find the active item 
                var activeImg = document.querySelector('figure.isActive');
                var lastImg = document.querySelector('div.thumbs-container').lastElementChild;  
                var firstImg = document.querySelector('div.thumbs-container').firstElementChild;
                var nextImg = document.querySelector('figure.isActive').nextElementSibling;

                $('.item.isActive').removeClass('isActive');

                //if activeImg is first image in list
                if(activeImg == items[0]) {

                    //get the url to inject into .big-img-container
                    var chosenThumb = $(nextImg).find('img').attr('src');
                    $(nextImg).addClass('isActive');

                    //make that img new big img.
                    $('.big-img-container').attr('style', 'background-image: url('+chosenThumb+')');
                }

                //if activeImg is last image in list
                else if (activeImg === lastImg) {
                    //get the url to inject into .big-img-container
                    var chosenThumb = $(firstImg).find('img').attr('src');
                    $(firstImg).addClass('isActive');

                    //make that img new big img.
                    $('.big-img-container').attr('style', 'background-image: url('+chosenThumb+')');
                }
                //else choose next sibling
                else {      
                    $(nextImg).addClass('isActive');
                    var chosenThumb = $(nextImg).find('img').attr('src');
                    //make that img new big img.
                    $('.big-img-container').attr('style', 'background-image: url('+chosenThumb+')');
                }
                // get curretn image figcaption
                updateCaption();
            });    
            /*----------------------------------------------------------------
            hides big image/ shows thumbs grid */
                                
            $('.thumbs-only').on('click', function() { 
                $('.big > figcaption').empty();

                carousel.style.display = 'none';
                showThumbs.style.display = 'block';
                imgInfo.style.visibility = 'hidden';
                cNav.style.visibility = 'hidden';
                prevImg.style.visibility = 'hidden';
                nextImg.style.visibility = 'hidden';
            });
            /*-------------------------------------------------------------------------------------------------
                SHOW / HIDE STATEMENT  */         
        }
});//________THE END________________________________________________________________________________________

})(jQuery);
