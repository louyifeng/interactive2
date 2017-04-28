

$(document).ready(function(){

	$('.curtains>li').css('position', 'fixed');

   $('.curtains').curtain();
   
	var scrollorama = $.scrollorama({
		blocks:'.curtains'
	});

      scrollorama.animate('.worldafterdeath',{
      delay:0, duration:1300, property:'top', start:0, end:1350
    });

     scrollorama.animate('.worldafterdeath',{
      delay:0, duration:1300, property:'zoom', start:1, end:1.5
    });

     scrollorama.animate('.date',{
      delay:0, duration:1300, property:'top', start:0, end:1300
    });

     scrollorama.animate('.date',{
      delay:0, duration:1300, property:'zoom', start:1, end:1.5
    });

     scrollorama.animate('.japanese',{
      delay:0, duration:1300, property:'zoom', start:1, end:1.5
    });

     scrollorama.animate('.title',{
      delay:0, duration:1300, property:'zoom', start:1, end:1.5
    });


     scrollorama.animate('.title',{
      delay:0, duration:1300, property:'top', start:0, end:1200
    });


     scrollorama.animate('.japanese',{
      delay:0, duration:1300, property:'top', start:0, end:1200
    });

     scrollorama.animate('.wave',{
      delay:1300, duration:500, property:'zoom', start:1.5, end:1
    });

     scrollorama.animate('.wave',{
      delay:1300, duration:600, property:'bottom', start:-2000, end:-10
    });
     
    
     
     
     scrollorama.animate('.human',{
      delay:1300, duration:800, property:'zoom', start:1.5, end:1
    });

     scrollorama.animate('.human',{
      delay:1300, duration:800, property:'bottom', start:200, end:0
    });

    
     scrollorama.animate('.man',{
      delay:3405, duration:600, property:'top', start:-100, end:0
    });

     scrollorama.animate('.sun2',{
      delay:3705, duration:2400, property:'top', start:0, end:-300
    });
     scrollorama.animate('.left',{
      delay:5305, duration:600, property:'left', start:-500, end:0
    });
     scrollorama.animate('.right',{
      delay:5305, duration:600, property:'right', start:-500, end:0
    });

});


$(document).ready(function() {

      $(".box").fancybox({
        nextEffect:'none',
        prevEffect:'none',
        padding:0
      });

    });
    


  



