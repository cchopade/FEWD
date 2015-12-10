$(document).ready(function() { 

//Bootstrap Modal
$('#introModal').modal(); 


//Setting variables to count how many planets have been visited 
var marsVisited = false;
var cometVisited = false; 
var europaVisited = false; 
var plutoVisited = false; 
var hdabVisited = false; 
var keplerVisited = false; 
var kicVisited = false; 
var andromedaVisited = false; 


// Moving the Spaceship 
$(document).on("keydown", moveShip);

var upKey = 38;
var downKey = 40; 
var rightKey = 39;
var leftKey = 37; 
var movementPixelDistance = 6; 

function moveShip (event) { 
	var xAxisPosition = $("#spaceship").css("left");
	var yAxisPosition = $("#spaceship").css("bottom");
	var xAxisPositionNum = parseInt(xAxisPosition);
	var yAxisPositionNum = parseInt(yAxisPosition);

	var key = event.keyCode;
	if (key === upKey) { 
		var yAxisPositionPixel = (yAxisPositionNum + movementPixelDistance) + "px"; 
		$("#spaceship").css("bottom", yAxisPositionPixel);
	}
	if (key === downKey) { 
		var yAxisPositionPixel = (yAxisPositionNum - movementPixelDistance) + "px"; 
		$("#spaceship").css("bottom", yAxisPositionPixel); 
	}
	if (key === rightKey) { 
		var xAxisPositionPixel = (xAxisPositionNum + movementPixelDistance) + "px"; 
		$("#spaceship").css("left", xAxisPositionPixel);
	}
	if (key === leftKey) { 
		var xAxisPositionPixel = (xAxisPositionNum - movementPixelDistance) + "px"; 
		$("#spaceship").css("left", xAxisPositionPixel);
	}

	detectCollision();
}

// Detect collision of spaceship with Celestial body 
function detectCollision() {
	//Find top, bottom, left, right position of each celestial body
	var marsPositionTop = $("#mars").offset().top; 
	var marsPositionBottom = $("#mars").offset().top + $("#mars").outerHeight(true); 
	var marsPositionLeft = $("#mars").offset().left; 
	var marsPositionRight = $("#mars").offset().left + $("#mars").outerWidth(); 
	
	var cometPositionTop = $("#comet").offset().top; 
	var cometPositionBottom = $("#comet").offset().top + $("#comet").outerHeight(true); 
	var cometPositionLeft = $("#comet").offset().left; 
	var cometPositionRight = $("#comet").offset().left + $("#comet").outerWidth(); 
	
	var europaPositionTop = $("#europa").offset().top; 
	var europaPositionBottom = $("#europa").offset().top + $("#europa").outerHeight(true); 
	var europaPositionLeft = $("#europa").offset().left; 
	var europaPositionRight = $("#europa").offset().left + $("#europa").outerWidth(); 

	var plutoPositionTop = $("#pluto").offset().top; 
	var plutoPositionBottom = $("#pluto").offset().top + $("#pluto").outerHeight(true); 
	var plutoPositionLeft = $("#pluto").offset().left; 
	var plutoPositionRight = $("#pluto").offset().left + $("#pluto").outerWidth(); 

	var hdabPositionTop = $("#hdab").offset().top; 
	var hdabPositionBottom = $("#hdab").offset().top + $("#hdab").outerHeight(true); 
	var hdabPositionLeft = $("#hdab").offset().left; 
	var hdabPositionRight = $("#hdab").offset().left + $("#hdab").outerWidth(); 

	var keplerPositionTop = $("#kepler").offset().top; 
	var keplerPositionBottom = $("#kepler").offset().top + $("#kepler").outerHeight(true); 
	var keplerPositionLeft = $("#kepler").offset().left; 
	var keplerPositionRight = $("#kepler").offset().left + $("#kepler").outerWidth(); 

	var kicPositionTop = $("#kic").offset().top; 
	var kicPositionBottom = $("#kic").offset().top + $("#kic").outerHeight(true); 
	var kicPositionLeft = $("#kic").offset().left; 
	var kicPositionRight = $("#kic").offset().left + $("#kic").outerWidth();

	var andromedaPositionTop = $("#andromeda").offset().top; 
	var andromedaPositionBottom = $("#andromeda").offset().top + $("#andromeda").outerHeight(true); 
	var andromedaPositionLeft = $("#andromeda").offset().left; 
	var andromedaPositionRight = $("#andromeda").offset().left + $("#andromeda").outerWidth();  

	//Find top, bottom, left, right position of spaceship
	var spaceshipPositionTop = $("#spaceship").offset().top; 
	var spaceshipPositionBottom = $("#spaceship").offset().top + $("#spaceship").outerHeight(true); 
	var spaceshipPositionLeft = $("#spaceship").offset().left; 
	var spaceshipPositionRight = $("#spaceship").offset().left + $("#spaceship").outerWidth(); 

	if (((spaceshipPositionBottom >= marsPositionTop) && (spaceshipPositionBottom <= marsPositionBottom)) && ((spaceshipPositionRight >= marsPositionLeft) && (spaceshipPositionRight <= marsPositionRight))) {
			$("#marsInfo").css("display","block");
			$("#distance").text("140 million miles");
			marsVisited = true; 
	}
	else if(((spaceshipPositionTop <= marsPositionBottom) && (spaceshipPositionTop >= marsPositionTop)) && ((spaceshipPositionRight >= marsPositionLeft) && (spaceshipPositionRight <= marsPositionRight))){
			$("#marsInfo").css("display","block");
			$("#distance").text("140 million miles");
			marsVisited = true; 
	}
	else if (((spaceshipPositionBottom >= cometPositionTop) && (spaceshipPositionBottom <= cometPositionBottom)) && ((spaceshipPositionRight >= cometPositionLeft) && (spaceshipPositionRight <= cometPositionRight))) {
			$("#cometInfo").css("display","block");
			$("#distance").text("317 million miles");
			cometVisited = true; 
	}
	else if(((spaceshipPositionTop <= cometPositionBottom) && (spaceshipPositionTop >= cometPositionTop)) && ((spaceshipPositionRight >= cometPositionLeft) && (spaceshipPositionRight <= cometPositionRight))){
			$("#cometInfo").css("display","block");
			$("#distance").text("317 million miles");
			cometVisited = true; 
	}
	else if (((spaceshipPositionBottom >= europaPositionTop) && (spaceshipPositionBottom <= europaPositionBottom)) && ((spaceshipPositionRight >= europaPositionLeft) && (spaceshipPositionRight <= europaPositionRight))) {
			$("#europaInfo").css("display","block");
			$("#distance").text("390.4 million miles");
			europaVisited = true; 
	}
	else if(((spaceshipPositionTop <= europaPositionBottom) && (spaceshipPositionTop >= europaPositionTop)) && ((spaceshipPositionRight >= europaPositionLeft) && (spaceshipPositionRight <= europaPositionRight))){
			$("#europaInfo").css("display","block");
			$("#distance").text("390.4 million miles");
			europaVisited = true; 
	}
	else if (((spaceshipPositionBottom >= plutoPositionTop) && (spaceshipPositionBottom <= plutoPositionBottom)) && ((spaceshipPositionRight >= plutoPositionLeft) && (spaceshipPositionRight <= plutoPositionRight))) {
			$("#plutoInfo").css("display","block");
			$("#distance").text("2.66 billion miles");
			plutoVisited = true; 
	}
	else if(((spaceshipPositionTop <= plutoPositionBottom) && (spaceshipPositionTop >= plutoPositionTop)) && ((spaceshipPositionRight >= plutoPositionLeft) && (spaceshipPositionRight <= plutoPositionRight))){
			$("#plutoInfo").css("display","block");
			$("#distance").text("2.66 billion miles");
			plutoVisited = true; 
	}
	else if (((spaceshipPositionBottom >= hdabPositionTop) && (spaceshipPositionBottom <= hdabPositionBottom)) && ((spaceshipPositionRight >= hdabPositionLeft) && (spaceshipPositionRight <= hdabPositionRight))) {
			$("#hdabInfo").css("display","block");
			$("#distance").text("63 light years");
			hdabVisited = true; 
	}
	else if(((spaceshipPositionTop <= hdabPositionBottom) && (spaceshipPositionTop >= hdabPositionTop)) && ((spaceshipPositionRight >= hdabPositionLeft) && (spaceshipPositionRight <= hdabPositionRight))){
			$("#hdabInfo").css("display","block");
			$("#distance").text("63 light years");
			hdabVisited = true; 
	}
	else if (((spaceshipPositionBottom >= keplerPositionTop) && (spaceshipPositionBottom <= keplerPositionBottom)) && ((spaceshipPositionRight >= keplerPositionLeft) && (spaceshipPositionRight <= keplerPositionRight))) {
			$("#keplerInfo").css("display","block");
			$("#distance").text("1,400 light years");
			keplerVisited = true; 
	}
	else if(((spaceshipPositionTop <= keplerPositionBottom) && (spaceshipPositionTop >= keplerPositionTop)) && ((spaceshipPositionRight >= keplerPositionLeft) && (spaceshipPositionRight <= keplerPositionRight))){
			$("#keplerInfo").css("display","block");
			$("#distance").text("1,400 light years");
			keplerVisited = true; 
	} 
	else if (((spaceshipPositionBottom >= kicPositionTop) && (spaceshipPositionBottom <= kicPositionBottom)) && ((spaceshipPositionRight >= kicPositionLeft) && (spaceshipPositionRight <= kicPositionRight))) {
			$("#kicInfo").css("display","block");
			$("#distance").text("1,500 light years");
			kicVisited = true; 
	}
	else if(((spaceshipPositionTop <= kicPositionBottom) && (spaceshipPositionTop >= kicPositionTop)) && ((spaceshipPositionRight >= kicPositionLeft) && (spaceshipPositionRight <= kicPositionRight))){
			$("#kicInfo").css("display","block");
			$("#distance").text("1,500 light years");
			kicVisited = true; 
	}
	else if (((spaceshipPositionBottom >= andromedaPositionTop) && (spaceshipPositionBottom <= andromedaPositionBottom)) && ((spaceshipPositionRight >= andromedaPositionLeft) && (spaceshipPositionRight <= andromedaPositionRight))) {
			$("#andromedaInfo").css("display","block");
			$("#distance").text("1,500 light years");
			andromedaVisited = true; 
	}
	else if(((spaceshipPositionTop <= andromedaPositionBottom) && (spaceshipPositionTop >= andromedaPositionTop)) && ((spaceshipPositionRight >= andromedaPositionLeft) && (spaceshipPositionRight <= andromedaPositionRight))){
			$("#andromedaInfo").css("display","block");
			$("#distance").text("1,500 light years");
			andromedaVisited = true; 
	}
	else {
		$(".eduInfo").css("display","none");
		$("#distance").text(""); 
	}

	//Noting if planets were visited and adding the # to the Mission Control Sidebar 
	var planetsVisited = 0; 
	if (marsVisited) {
		planetsVisited++; 
	}
	if (cometVisited) {
		planetsVisited++; 
	}
	if (europaVisited) {
		planetsVisited++; 
	}
	if (plutoVisited) {
		planetsVisited++; 
	}
	if (hdabVisited) {
		planetsVisited++; 
	}
	if (keplerVisited) {
		planetsVisited++; 
	}
	if (kicVisited) {
		planetsVisited++; 
	}
	if (andromedaVisited) {
		planetsVisited++; 
	}
	$("#explored").text(planetsVisited); 
	
}

//Open the captain's log modal 
$(".captainsLog").click(writeCaptainsLog); 

function writeCaptainsLog() {
	$('#captainsLogForm').modal(); 
}

//Add the form input to the Mission Control sidebar 
$("form").on("submit",sendToNASA); 
function sendToNASA(event) {
	event.preventDefault(); 
	var captainsLogText = $("#logText").val(); 
	$("#logList").append("<li>" + captainsLogText + "</li>");
	$('#captainsLogForm').modal("hide");
	$("#logText").val(""); 
}


});

