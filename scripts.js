/*OS.init();*/

$(document).ready(function() {
    $('.js-menu').on('click', function(event) {
        event.preventDefault();
        $('html').addClass('menu-open');
    });
    
    $('.js-closeMenu').on('click', function() {
        $('html').removeClass('menu-open');
    });
});

