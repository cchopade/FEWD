//Find out how many pictures there are. The order. When someone's clicking. The photo we're currently on. 

$(document).ready(function() {

//Variables
var animals = ['animal1.jpg' , 'animal2.jpg' , 'animal3.jpg' , 'animal4.jpg' , 'animal5.jpg' , 'animal6.jpg' , 'animal7.jpg']; 

var i = 0; //What index in our array are we at? Aka what picture are we on upon load?

var lastIndexofArray = animals.length - 1; 

//Events 
$('#next').click(goToNextAnimal);

$('#back').click(goToPreviousAnimal);


//Functions 
function goToNextAnimal() {
	if (i === animals.length - 1) {   //if we are at the end of our array, go back to the beginning . we could also use the variable lastindexofarray instead of animals.length-1
		i=0;
	}
	else { // or else keep going up 
		i++
	}
	// i++; //this really means i = i++ (so we are redefining the variable!)
	// console.log('index : ' + i);

	var nextAnimal = animals[i]; //This will give us the second photo, since we just redefined the variable
	console.log('animal: ' + nextAnimal);

	$('#image-to-vote-on').attr('src','images/' + nextAnimal); 
}

function goToPreviousAnimal() {
	if (i === 0) {
		i = lastIndexofArray;
	}
	else {
		i--;
	}
	var previousAnimal = animals[i];
	$('#image-to-vote-on').attr('src','images/' + previousAnimal); 
}





















}); 
