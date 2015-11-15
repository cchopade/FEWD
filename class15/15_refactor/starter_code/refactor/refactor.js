//Use variables example
$("body").append("<img src='images/Will.png' alt='William\'s picture'><p></p>");

//VS
var name = 'William';
var bio = 'The instructor for this course is William Neely. William has a degree in Physics from Southwestern College.'

$('body').append("<img src='images/" + name + ".png' alt='" + name + "'s picture'><p>" + bio + "</p>"); 





//Use functions example
$("#container>ol").prepend("<li>Milk</li>");
$("#container>ol").prepend("<li>Cookies</li>");
$("#container>ol").prepend("<li>Sugar</li>");
$("#container>ol").prepend("<li>Bananas</li>");
$("#container>ol").prepend("<li>Gatorade</li>");

//VS

function prependListItem(foodItem) {
	$("#container>ol").prepend("<li>" + foodItem + "</li>");
}
prependListItem("Milk");
prependListItem("Cookies");
prependListItem("Sugar");
prependListItem("Bananas");
prependListItem("Gatorade");






//Use Arrays
$("#container>ol").prepend("<li>Milk</li>");
$("#container>ol").prepend("<li>Cookies</li>");
$("#container>ol").prepend("<li>Sugar</li>");
$("#container>ol").prepend("<li>Bananas</li>");
$("#container>ol").prepend("<li>Gatorade</li>");

//VS
//Define variable 
var foodItems = ["Milk", "Cookies", "Sugar", "Bananas", "Gatorade"];

//this way 
function prependListItem(foodItems) {
	$('#container>ol').prepend("<li>" + foodItems + "</li>"); 
}

//or this way
foodItems.forEach(prependListItem); 

//or this way 
for (var i = 0; i < foodItems.length; i++)  {
	$('#container>ol').prepend("<li>" + foodItems[i] + "</li>"); 
}

//or this way 
var foodItem;
for (var i = 0; i < foodItems.length; i++) {
	foodItem = foodItems[i];
	prependListItem(foodItem); 
}







//Combine jQuery selectors
$("#container").css("width","960px");
$("#main").css("width","960px");

//VS
$("#container, #main").css("wdith","960px"); 








//Combine multiple jQuery css, attr, etc changes
$("#container,#main").css("width","960px");
$("#container,#main").css("background","red");
$("#container,#main").css("color","purple");

//VS -- use objects 
$("#container,#main").css({
	width: "960px", //key and value 
	background: "red",
	color: "purple"
}); 






//Chain jQuery function calls
$("input").css("width","200px");
$("input").attr("placeholder","My placeholder");
$("input").before("<label>My input</label>");

//VS
$("input").css("width","200px")
	.attr("placeholder","My placeholder")
	.before("<label>My input</label>");


















