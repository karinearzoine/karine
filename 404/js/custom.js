$( document ).ready(function() {
	
	/*------------------------------ WOW Script ----------------------*/

	new WOW().init();

	/*------------------------------ Voice Control -----------------*/
	
	if (annyang) {
	  var commands = {
		
		'Home': function() {
			window.location = "http://karine.arzoine.me"
		}											
			
	  };
	  
	  annyang.addCommands(commands);
	  annyang.start();
	}
	
	
	/*------------------------------ Clouds  -----------------*/	
		
	$('#far-clouds').pan({fps: 30, speed: 1.5, dir: 'left', depth: 30});
	$('#near-clouds').pan({fps: 30, speed: 2.5, dir: 'left', depth: 70});	
	
});