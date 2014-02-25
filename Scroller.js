(function($){
    $(document).ready(function() {
        // $('#banner').children().each(function() {
        //     if ( $(this).isInViewport() )
        //         $(this).css("background-color", "#C5C7BC");
        //     else
        //         $(this).css("background-color", "#21221E");
        // });
        
        $(window).scroll(function() {
            if($('.hook').isInViewport({"tolerance" :100}))
                $('.hook').fadeIn('fast');
            else
                $('.hook').fadeOut('slow');
        });
    });
}(jQuery));