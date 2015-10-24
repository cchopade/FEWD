
var grayColor = 'gray';
var whiteColor = '#fff';
var blackColor = 'black';
var yellowColor = 'yellow';

/* Listen for input */
document.getElementById('grayButton').onclick = switchGray;
document.getElementById('whiteButton').onclick = switchWhite;
document.getElementById('yellowButton').onclick = switchYellow;

function switchGray() {
  document.body.style.backgroundColor = grayColor;
 document.body.style.color = whiteColor;
}

function switchWhite() {
  document.body.style.backgroundColor = whiteColor;
  document.body.style.color = blackColor;
}

function switchYellow() {
	document.body.style.backgroundColor = yellowColor;
	document.body.style.color = blackColor;
}