// JavaScript Document
$(document).ready(function() {
   
	$.fn.countChecked = function(numCheck) {
		
		
		var thisBox = $(this);
		
  var n = $(this).children( "input:checkbox:checked" ).length;
 
 
      if ((n >= numCheck))
        {
            $(this).children('input[type="checkbox"]').not(':checked').prop('disabled', true);
            $(this).children(' input[type="checkbox"]').not(':checked').fadeOut();
           
        }
       
        else if ((n < numCheck))
        {
            $(this).children('input[type="checkbox"]').not(':checked').prop('disabled', false);
            $(this).children(' input[type="checkbox"]').not(':checked').parent().show();
            $(this).children(' input[type="checkbox"]').not(':checked').fadeIn();
        }
       
        else
        {
            $(this).children(' input[type="checkbox"]').not(':checked').removeProp('disabled');
        }

   
 
 
};

 



   
    });
