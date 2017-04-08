
$(document).ready(function(){

	$('.curtains>li').css('position', 'fixed');

   $('.curtains').curtain();
   
	var scrollorama = $.scrollorama({
		blocks:'.curtains'
	});
    
    
    scrollorama.animate('.mask1',{
      delay:0, duration:3500, property:'opacity', start:1, end:0.3
    });

 
    scrollorama.animate('.mask2',{
      delay:2500, duration:3500, property:'opacity', start:0.3, end:1
    });

  

    
    scrollorama.animate('.plane',{
      delay:7600, duration:993, property:'left', start:-1500, end:-100
    });
     
    scrollorama.animate('.cloud',{
      delay:6000, duration:993, property:'left', start:-600, end:500
    });

     scrollorama.animate('.back2',{
      delay:7200, duration:993, property:'opacity', start:0, end:1
    });
     
     scrollorama.animate('.fire',{
      delay:7600, duration:993, property:'right', start:-1500, end:-200
    });
     
     scrollorama.animate('.whaam',{
      delay:8400, duration:293, property:'right', start:-1500, end:400
    });

     scrollorama.animate('.aboutartist',{
      delay:9103, duration:993, property:'bottom', start:0, end:993
    });
     
     scrollorama.animate('.roy',{
      delay:9400, duration:493, property:'bottom', start:-650, end:-20
    });
     
   
   	scrollorama.animate('#gaming .btn',{
    	delay:2000, duration:993, property:'left', start:-800, easing:'easeOutBounce'
   	});
   
   	scrollorama.animate('#cs ul li:nth-child(1)',{
    	delay:2979, duration:993, property:'top', start:840, end: 640
   	});
   	scrollorama.animate('#cs ul li:nth-child(2)',{
    	delay:2979, duration:993, property:'top', start:800, end: 640
   	});
   	scrollorama.animate('#cs ul li:nth-child(3)',{
    	delay:2979, duration:993, property:'top', start:920, end: 580
   	});
   	scrollorama.animate('#cs ul li:nth-child(4)',{
    	delay:2979, duration:993, property:'top', start:880, end: 620
   	});
   	scrollorama.animate('#cs ul li:nth-child(5)',{
    	delay:2979, duration:993, property:'top', start:830, end: 660
   	});
   	scrollorama.animate('#cs ul li:nth-child(6)',{
    	delay:2979, duration:993, property:'top', start:960, end: 600
   	});
   	
   	scrollorama.animate('#jake h2',{
    	delay:4500, duration:900, property:'top', start:0, easing:'easeOutBounce'
   	});
});