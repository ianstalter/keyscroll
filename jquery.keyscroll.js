(function($) {
	$.fn.keyscroll = function(options) {
			var li = $('.view');

var liSelected;
$(window).keydown(function(e){

	     if (e.which == 8)

{ 

 	liSelected.val("->");
 }
    if(e.which === 40){
        if(liSelected){
            var idx = li.index( liSelected );
            liSelected.removeClass('editing').blur();
            next = li.eq( idx + 1 )
            if(next.length > 0){
                liSelected = next.addClass('editing').focus();
            }else{
                liSelected = li.eq(0).addClass('editing').focus();
            }
        }else{
            liSelected = li.eq(0).addClass('editing').focus();
        }
    }else if(e.which === 38){
        if(liSelected){
          var idx = li.index( liSelected );
            liSelected.removeClass('editing').blur();
            next = li.eq( idx - 1 )
            if(next.length > 0){
                liSelected = next.addClass('editing').focus();
            }else{
                liSelected = li.last().addClass('editing').focus();
            }
        }else{
            liSelected = li.last().addClass('editing').focus();
        }
    }
});
	}
})(jQuery);


