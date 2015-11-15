$(document).ready(function() {

	$("body").append("<h1>Hi world!</h1>");

var pies=["Cherry","Pumpkin","Banana","Rhubarb"];

$("body").append("There are "+pies.length+" total pies.<br>");

pies.forEach(function(element,index){
	console.log(element);
	if (element === "Cherry") {
	
		$("body").append(index+1+") "+element+": Yum!<br>");
	
	} else if (element === "Rhubarb") {
	
		$("body").append(index+1+") "+element+": Yuck<br>");
	
	} else if (element === "Banana" || element === "Pumpkin") {
	
		$("body").append(index+1+") "+element+": meh<br>");

	}
});

});


