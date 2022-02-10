jQuery(document).ready(function($) {
    // Menu hamburger animation
    
    $(window).resize(function(){
        if (window.matchMedia("(min-width: 720px)").matches) {
            $('#menu').show();
            $('#buttons').show();  
        }else{
            $('#menu').hide();
            $('#buttons').hide(); 
        } 
    });
    
    $('#hamburgerMenu').click(function(){
        $('#menu').fadeToggle();
        $('#buttons').fadeToggle();
    });
    // Fin menu hamburger animation

    /*************** Slideshow ******************/

    $('.next').click(function(){
        let activeSlide = $('.active');
        let nextSlide = activeSlide.next();

        if(nextSlide.length){
            activeSlide.removeClass('active').css('z-index, -10');
            nextSlide.addClass('active').css('z-index', 10);
        }

    });
    $('.prev').click(function(){
        let activeSlide = $('.active');
        let prevSlide = activeSlide.prev();

        if(prevSlide.length){
            activeSlide.removeClass('active').css('z-index, -10');
            prevSlide.addClass('active').css('z-index', 10);
        }

    });
       
 });


