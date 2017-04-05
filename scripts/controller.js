$(document).ready(function() {
    var input = 0;
    $('.control').click(function () {
         if( input != $(this).attr("controlId"))
         {
             input = $(this).attr("controlId");
        
            $.ajax({
              url: '/control',
              type: 'POST',
              data: {int:input}
            });
         }
    });
});