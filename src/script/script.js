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
       
 });