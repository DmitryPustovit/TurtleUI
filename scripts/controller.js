$(document).ready(function() {
    $('.control').click(function () {
        //$.post( "/control", {int:"1"} );
        $.ajax({
          url: '/control',
          type: 'POST',
          data: {int:"1"}
            });
    });
});