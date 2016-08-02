(function($){

	$('.dc-social a').click(function(event){
		event.preventDefault();

                //popup 
                var width  = 575,
                    height = 520,
                    left   = ($(window).width()  - width)  / 2,
                    top    = ($(window).height() - height) / 2,
                    opts   = 'status=1' +
                        ',width='  + width  +
                        ',height=' + height +
                        ',top='    + top    +
                        ',left='   + left;

                window.open($(this).attr("href"), 'share', opts);
        
	});


})(jQuery);
