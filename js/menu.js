
// Show the horizontal menu

$(document).ready(function() {

    $('.menu-toggle').click(function(e){

        var menu = $(this).data('show-dialog');

        $('.' + menu).slideToggle('fast');
    });

    $('.options-menu-horizontal span.close-menu').click(function(){

        $(this).closest('.options-menu-horizontal').slideUp('fast');

    });
});

