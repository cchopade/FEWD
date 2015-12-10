//Colonize Mars js file 


$(document).ready(function() {

//Event Listeners
landSpaceship();
$("#plantFlag").click(plantFlag);
$("#explore").click(closeWindow);
});

//Functions 
function plantFlag(event) {
	$("#flag").css("display","block"); 
}

function landSpaceship() {
	$("#spaceshipOnMars").animate({ top: "50%", left : "10%"}, 2000);
}

function closeWindow() {
	window.close();  
}

