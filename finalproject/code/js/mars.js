$(document).ready(function() {

//Spaceship Landing Animation 
function landSpaceship (event) {
	event.preventDefault(); 
	$("#spaceshipOnMars").animate({ top: "50%"}, {left : "20%"}, 1500);
});


//Plant Flag 
$("#plantFlag").click(plantFlag);

function plantFlag(event) {
	$("flag").css("display","inline"); 
}






});