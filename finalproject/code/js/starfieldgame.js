//Starfield 
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2012 Selman Ay
 *
 * Original File Name: starfield.js
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 **/

function $i(id) { return document.getElementById(id); }
function $r(parent,child) { (document.getElementById(parent)).removeChild(document.getElementById(child)); }
function $t(name) { return document.getElementsByTagName(name); }
function $c(code) { return String.fromCharCode(code); }

function get_screen_size()
	{
		var w=document.documentElement.clientWidth;
		var h=document.documentElement.clientHeight;
		return Array(w,h);
	}

var url=document.location.href;

var flag=true;
var test=true;
var n=parseInt((url.indexOf('n=')!=-1)?url.substring(url.indexOf('n=')+2,((url.substring(url.indexOf('n=')+2,url.length)).indexOf('&')!=-1)?url.indexOf('n=')+2+(url.substring(url.indexOf('n=')+2,url.length)).indexOf('&'):url.length):512);
var star_color_ratio=0;
var star_ratio=256;
var star_speed=0.6;
var star=new Array(n);
var color;

var timeout;
var fps=0;

function init() {
	var a=0;
	for(var i=0;i<n;i++) {
		star[i]=new Array(5);
		star[i][0]=Math.random()*w*2-x*2;
		star[i][1]=Math.random()*h*2-y*2;
		star[i][2]=Math.round(Math.random()*z);
		star[i][3]=0;
		star[i][4]=0;
	}
	var starfield=$i('starfield');
	starfield.style.position='absolute';
	starfield.width=w;
	starfield.height=h;
	context=starfield.getContext('2d');
	context.lineCap='round';
	context.fillStyle='rgb(0,0,0)';
	context.strokeStyle='rgb(255,255,255)';
}

function anim() {
	mouse_x=cursor_x-x;
	mouse_y=cursor_y-y;
	context.fillRect(0,0,w,h);
	for(var i=0;i<n;i++) {
		test=true;
		star_x_save=star[i][3];
		star_y_save=star[i][4];
		star[i][0]+=mouse_x>>4; if(star[i][0]>x<<1) { star[i][0]-=w<<1; test=false; } if(star[i][0]<-x<<1) { star[i][0]+=w<<1; test=false; }
		star[i][1]+=mouse_y>>4; if(star[i][1]>y<<1) { star[i][1]-=h<<1; test=false; } if(star[i][1]<-y<<1) { star[i][1]+=h<<1; test=false; }
		star[i][2]-=star_speed; if(star[i][2]>z) { star[i][2]-=z; test=false; } if(star[i][2]<0) { star[i][2]+=z; test=false; }
		star[i][3]=x+(star[i][0]/star[i][2])*star_ratio;
		star[i][4]=y+(star[i][1]/star[i][2])*star_ratio;
		if(star_x_save>0&&star_x_save<w&&star_y_save>0&&star_y_save<h&&test) {
			context.lineWidth=(1-star_color_ratio*star[i][2])*2;
			context.beginPath();
			context.moveTo(star_x_save,star_y_save);
			context.lineTo(star[i][3],star[i][4]);
			context.stroke();
			context.closePath();
			}
		}
	timeout=setTimeout('anim()',fps);
}

function start() {
	resize();
	anim();
}

function resize() {
	w=parseInt((url.indexOf('w=')!=-1)?url.substring(url.indexOf('w=')+2,((url.substring(url.indexOf('w=')+2,url.length)).indexOf('&')!=-1)?url.indexOf('w=')+2+(url.substring(url.indexOf('w=')+2,url.length)).indexOf('&'):url.length):get_screen_size()[0]);
	h=parseInt((url.indexOf('h=')!=-1)?url.substring(url.indexOf('h=')+2,((url.substring(url.indexOf('h=')+2,url.length)).indexOf('&')!=-1)?url.indexOf('h=')+2+(url.substring(url.indexOf('h=')+2,url.length)).indexOf('&'):url.length):get_screen_size()[1]);
	x=Math.round(w/2);
	y=Math.round(h/2);
	z=(w+h)/2;
	star_color_ratio=1/z;
	cursor_x=x;
	cursor_y=y;
	init();
}
// End Starfield 










////////////////////////Starfield Game
$(document).ready(function() { 

//Lightbox (Bootstrap Modal)
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

function moveShip (event) { 
	var xAxisPosition = $("#spaceship").css("left");
	var yAxisPosition = $("#spaceship").css("bottom");
	var xAxisPositionNum = parseInt(xAxisPosition);
	var yAxisPositionNum = parseInt(yAxisPosition);

	console.log("X position: " + xAxisPosition);
	console.log("Y position: " + yAxisPosition);
	console.log("X val: " + xAxisPositionNum);
	console.log("Y val: " + yAxisPositionNum);

	var key = event.keyCode;
	if (key === 38) { //top key
		var yAxisPositionPixel = (yAxisPositionNum + 6) + "px"; 
		$("#spaceship").css("bottom", yAxisPositionPixel);
	}
	if (key === 40) { //bottom key
		var yAxisPositionPixel = (yAxisPositionNum - 6) + "px"; 
		$("#spaceship").css("bottom", yAxisPositionPixel); 
	}
	if (key === 39) { //right key
		var xAxisPositionPixel = (xAxisPositionNum + 6) + "px"; 
		$("#spaceship").css("left", xAxisPositionPixel);
	}
	if (key === 37) { //left key 
		var xAxisPositionPixel = (xAxisPositionNum - 6) + "px"; 
		$("#spaceship").css("left", xAxisPositionPixel);
	}

	detectCollision();
}

// Detect collision of spaceship with Celestial body 
function detectCollision() {
	//Mars Variables 
	var marsPositionTop = $("#mars").offset().top; 
	var marsPositionBottom = $("#mars").offset().top + $("#mars").outerHeight(true); 
	var marsPositionLeft = $("#mars").offset().left; 
	var marsPositionRight = $("#mars").offset().left + $("#mars").outerWidth(); 
	//Comet Variables 
	var cometPositionTop = $("#comet").offset().top; 
	var cometPositionBottom = $("#comet").offset().top + $("#comet").outerHeight(true); 
	var cometPositionLeft = $("#comet").offset().left; 
	var cometPositionRight = $("#comet").offset().left + $("#comet").outerWidth(); 
	//Europa Varibales 
	var europaPositionTop = $("#europa").offset().top; 
	var europaPositionBottom = $("#europa").offset().top + $("#europa").outerHeight(true); 
	var europaPositionLeft = $("#europa").offset().left; 
	var europaPositionRight = $("#europa").offset().left + $("#europa").outerWidth(); 
	//Pluto Variables 
	var plutoPositionTop = $("#pluto").offset().top; 
	var plutoPositionBottom = $("#pluto").offset().top + $("#pluto").outerHeight(true); 
	var plutoPositionLeft = $("#pluto").offset().left; 
	var plutoPositionRight = $("#pluto").offset().left + $("#pluto").outerWidth(); 
	//hdab Varibales 
	var hdabPositionTop = $("#hdab").offset().top; 
	var hdabPositionBottom = $("#hdab").offset().top + $("#hdab").outerHeight(true); 
	var hdabPositionLeft = $("#hdab").offset().left; 
	var hdabPositionRight = $("#hdab").offset().left + $("#hdab").outerWidth(); 
	//Kepler Varibales 
	var keplerPositionTop = $("#kepler").offset().top; 
	var keplerPositionBottom = $("#kepler").offset().top + $("#kepler").outerHeight(true); 
	var keplerPositionLeft = $("#kepler").offset().left; 
	var keplerPositionRight = $("#kepler").offset().left + $("#kepler").outerWidth(); 
	//Kic Varibales 
	var kicPositionTop = $("#kic").offset().top; 
	var kicPositionBottom = $("#kic").offset().top + $("#kic").outerHeight(true); 
	var kicPositionLeft = $("#kic").offset().left; 
	var kicPositionRight = $("#kic").offset().left + $("#kic").outerWidth();
	//Andromeda Varibales 
	var andromedaPositionTop = $("#andromeda").offset().top; 
	var andromedaPositionBottom = $("#andromeda").offset().top + $("#andromeda").outerHeight(true); 
	var andromedaPositionLeft = $("#andromeda").offset().left; 
	var andromedaPositionRight = $("#andromeda").offset().left + $("#andromeda").outerWidth();  

	//Spaceship Variables 
	var spaceshipPositionTop = $("#spaceship").offset().top; 
	var spaceshipPositionBottom = $("#spaceship").offset().top + $("#spaceship").outerHeight(true); 
	var spaceshipPositionLeft = $("#spaceship").offset().left; 
	var spaceshipPositionRight = $("#spaceship").offset().left + $("#spaceship").outerWidth(); 

	 console.log('Spaceship Bottom: ' +spaceshipPositionBottom);
	 console.log('Mars Top: ' +marsPositionTop);



	//Mars If Statements 
	if (((spaceshipPositionBottom >= marsPositionTop) && (spaceshipPositionBottom <= marsPositionBottom)) && ((spaceshipPositionRight >= marsPositionLeft) && (spaceshipPositionRight <= marsPositionRight))) {
		//if((spaceshipPositionRight >= marsPositionLeft) && (spaceshipPositionRight <= marsPositionRight)) {
			$("#marsInfo").css("display","block");
			$("#distance").text("140 million miles");
			marsVisited = true; 

		//}
	}
	else if(((spaceshipPositionTop <= marsPositionBottom) && (spaceshipPositionTop >= marsPositionTop)) && ((spaceshipPositionRight >= marsPositionLeft) && (spaceshipPositionRight <= marsPositionRight))){
		// if ((spaceshipPositionLeft <= marsPositionRight) && (spaceshipPositionLeft >= marsPositionLeft)) {
		// 	$("#marsInfo").css("display","block");
		// }
		//if((spaceshipPositionRight >= marsPositionLeft) && (spaceshipPositionRight <= marsPositionRight)) {
			$("#marsInfo").css("display","block");
			$("#distance").text("140 million miles");
			marsVisited = true; 
		//}
	}
	else {
		$("#marsInfo").css("display","none");
		$("#distance").text(""); 
	}

	//Comet If Statements 
	if (((spaceshipPositionBottom >= cometPositionTop) && (spaceshipPositionBottom <= cometPositionBottom)) && ((spaceshipPositionRight >= cometPositionLeft) && (spaceshipPositionRight <= cometPositionRight))) {
			$("#cometInfo").css("display","block");
			$("#distance").text("317 million miles");
			cometVisited = true; 
	}
	else if(((spaceshipPositionTop <= cometPositionBottom) && (spaceshipPositionTop >= cometPositionTop)) && ((spaceshipPositionRight >= cometPositionLeft) && (spaceshipPositionRight <= cometPositionRight))){
			$("#cometInfo").css("display","block");
			$("#distance").text("317 million miles");
			cometVisited = true; 
	}
	else {
		$("#cometInfo").css("display","none");
		$("#distance").text(""); 
	}

	//Europa If Statements 
	if (((spaceshipPositionBottom >= europaPositionTop) && (spaceshipPositionBottom <= europaPositionBottom)) && ((spaceshipPositionRight >= europaPositionLeft) && (spaceshipPositionRight <= europaPositionRight))) {
			$("#europaInfo").css("display","block");
			$("#distance").text("390.4 million miles");
			europaVisited = true; 
	}
	else if(((spaceshipPositionTop <= europaPositionBottom) && (spaceshipPositionTop >= europaPositionTop)) && ((spaceshipPositionRight >= europaPositionLeft) && (spaceshipPositionRight <= europaPositionRight))){
			$("#europaInfo").css("display","block");
			$("#distance").text("390.4 million miles");
			europaVisited = true; 
	}
	else {
		$("#europaInfo").css("display","none");
		$("#distance").text(""); 
	}

	//Pluto If Statements 
	if (((spaceshipPositionBottom >= plutoPositionTop) && (spaceshipPositionBottom <= plutoPositionBottom)) && ((spaceshipPositionRight >= plutoPositionLeft) && (spaceshipPositionRight <= plutoPositionRight))) {
			$("#plutoInfo").css("display","block");
			$("#distance").text("2.66 billion miles");
			plutoVisited = true; 
	}
	else if(((spaceshipPositionTop <= plutoPositionBottom) && (spaceshipPositionTop >= plutoPositionTop)) && ((spaceshipPositionRight >= plutoPositionLeft) && (spaceshipPositionRight <= plutoPositionRight))){
			$("#plutoInfo").css("display","block");
			$("#distance").text("2.66 billion miles");
			plutoVisited = true; 
	}
	else {
		$("#plutoInfo").css("display","none");
		$("#distance").text(""); 
	}

	//hdab If Statements 
	if (((spaceshipPositionBottom >= hdabPositionTop) && (spaceshipPositionBottom <= hdabPositionBottom)) && ((spaceshipPositionRight >= hdabPositionLeft) && (spaceshipPositionRight <= hdabPositionRight))) {
			$("#hdabInfo").css("display","block");
			$("#distance").text("63 light years");
			hdabVisited = true; 
	}
	else if(((spaceshipPositionTop <= hdabPositionBottom) && (spaceshipPositionTop >= hdabPositionTop)) && ((spaceshipPositionRight >= hdabPositionLeft) && (spaceshipPositionRight <= hdabPositionRight))){
			$("#hdabInfo").css("display","block");
			$("#distance").text("63 light years");
			hdabVisited = true; 
	}
	else {
		$("#hdabInfo").css("display","none");
		$("#distance").text(""); 
	}

	//Kepler If Statements 
	if (((spaceshipPositionBottom >= keplerPositionTop) && (spaceshipPositionBottom <= keplerPositionBottom)) && ((spaceshipPositionRight >= keplerPositionLeft) && (spaceshipPositionRight <= keplerPositionRight))) {
			$("#keplerInfo").css("display","block");
			$("#distance").text("1,400 light years");
			keplerVisited = true; 
	}
	else if(((spaceshipPositionTop <= keplerPositionBottom) && (spaceshipPositionTop >= keplerPositionTop)) && ((spaceshipPositionRight >= keplerPositionLeft) && (spaceshipPositionRight <= keplerPositionRight))){
			$("#keplerInfo").css("display","block");
			$("#distance").text("1,400 light years");
			keplerVisited = true; 
	}
	else {
		$("#keplerInfo").css("display","none");
		$("#distance").text(""); 
	}

	//Kic If Statements 
	if (((spaceshipPositionBottom >= kicPositionTop) && (spaceshipPositionBottom <= kicPositionBottom)) && ((spaceshipPositionRight >= kicPositionLeft) && (spaceshipPositionRight <= kicPositionRight))) {
			$("#kicInfo").css("display","block");
			$("#distance").text("1,500 light years");
			kicVisited = true; 
	}
	else if(((spaceshipPositionTop <= kicPositionBottom) && (spaceshipPositionTop >= kicPositionTop)) && ((spaceshipPositionRight >= kicPositionLeft) && (spaceshipPositionRight <= kicPositionRight))){
			$("#kicInfo").css("display","block");
			$("#distance").text("1,500 light years");
			kicVisited = true; 
	}
	else {
		$("#kicInfo").css("display","none");
		$("#distance").text(""); 
	}

	//Andromeda If Statements 
	if (((spaceshipPositionBottom >= andromedaPositionTop) && (spaceshipPositionBottom <= andromedaPositionBottom)) && ((spaceshipPositionRight >= andromedaPositionLeft) && (spaceshipPositionRight <= andromedaPositionRight))) {
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
		$("#andromedaInfo").css("display","none");
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



//Captains Log 
$(".captainsLog").click(writeCaptainsLog); 

function writeCaptainsLog() {
	$('#captainsLogForm').modal(); 
}

$("form").on("submit",sendToNASA); 
function sendToNASA(event) {
	event.preventDefault(); 
	var captainsLogText = $("#logText").val(); 
	$("#logList").append("<li>" + captainsLogText + "</li>");
	$('#captainsLogForm').modal("hide");
	$("#logText").val(""); 
}


















//Mission Control Sidebar
//Miles from Earth 
//event listener - either rocketship in the area OR display is being displayed
//function - change the DOM using js -- just plug in how far it is

//Bodies Explored 

//Communications sent to NASA 




});












