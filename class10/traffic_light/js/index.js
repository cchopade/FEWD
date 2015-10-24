//Implement the red light using jQuery. Don't forget to add the script tags.
$(document).ready(function() {

//Listening Events 
	$('#stopButton').click(illuminateStopLightRed);
	$('#stopButton').mouseenter(illuminateStopLightRed);
	$('#stopButton').mouseout(clearLights);
	$('#slowButton').click(illuminateSlowLightYellow);
	$('#goButton').click(illuminateGoLightGreen);

//Functions 
	function illuminateStopLightRed() {
		clearLights();
		$('#stopLight').css('background-color','red');
	}
	function illuminateSlowLightYellow() {
		clearLights();
		$('#slowLight').css('background-color','yellow');
	}
	function illuminateGoLightGreen() {
		clearLights();
		$('#goLight').css('background-color','green');
	}
	function clearLights() {
		$('.bulb').css('background-color','black');
	}
	








});