(function($){
    $(document).ready(function() {        
        $(window).scroll(function() {
            if($('.hook').isInViewport({"tolerance" :100}))
                $('.hook').fadeIn('fast');
            else
                $('.hook').fadeOut('slow');
        });
    });
}(jQuery));