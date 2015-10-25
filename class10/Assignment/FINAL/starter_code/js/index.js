//Directions
// Select the appropriate DOM elements with CSS selectors upon a user's click using the ```$.click()``` handler
// If a user clicks "Read More" on the primary column:
	//have the text in the ```<p>``` tag slide down along with a "Read Less" link in the blog post using  ```$.slideDown()``` and ```$.show()```
	//hide the "Read More" link using ```$.hide()```

// If a user clicks "Read Less" on the primary column:
	//have the ```<p>``` slide up and hide the "Read Less" link using  ```$.slideUp()``` and ```$.hide()```
	//show the "Read More" link using ```$.show()```

// Using the same functions as above, if a user clicks the "Learn More" link in the sidebar, have the ```<span>``` inside that ```<p>``` slide down and hide the "Learn More" link using ```$.slideDown()``` and ```$.hide()```


//Work 
// Ready handler 
$(document).ready(function() {

//Listening events
$('.readmore').click(slideTextDown);
$('.readless').click(slideTextUp);
$('.learnmore').click(slideTextDown2)


//Functions 
function slideTextDown() {
	$('#show-this-on-click').slideDown();
	$('.readless').show();
	$('.readmore').hide();
}
function slideTextUp() {
	$('#show-this-on-click').slideUp()
	$('.readless').hide();
	$('.readmore').delay(1200).show(); 
}
function slideTextDown2() {
	$('#learnmoretext').slideDown();
	$('.learnmore').hide(); //Why does it say to use both slide down and hide in the directions?
}

//Example Anonymous Function that I could've used 
$('.readmore').click(function() {
	$('#show-this-on-click').slideDown();
	$('.readless').show();
	$('.readmore').hide();
});

//Questions 
//Why do we have the hide class a few times in the html? How can i combine this code?
//Am i putting the jquery file in the right place on the html? In class we said it goes before our own js file but in the homework it was originally after before I changed it.  
// Why isn't my delay command working? I want "read more" to delay showing until all of the text has slid up. 
//What is the benefit of anonymous functions? 

});