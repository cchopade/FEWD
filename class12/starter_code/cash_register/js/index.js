$(document).ready(function() {
//variable to capture the current total 
	var total = 0; 

	//Listener - Listen for user to submit a new price
	$('#entry').submit(sumTotalAndNewEntry);

	function sumTotalAndNewEntry(event) {
		event.preventDefault(); 
		//Get the value from the input field 
		var entryNew = $('#newEntry').val(); 
		console.log('entryNew value: ' + entryNew); 

		//Convert the value to a number
		var entryNewNum = parseFloat(entryNew); 
		console.log('entryNewNum value: ' + entryNewNum); 

		//Change the number of the new entry into currency 
		var entryNewCurrency = currencyFormat(entryNewNum); 
		console.log('entryNewCurrency vale: ' + entryNewCurrency); 

		//Creating a placeholder for total currency 
		var totalCurrency; 

		//updating the current total 
		total = total + entryNewNum;
		// (more advanced way to do it -- total += entryNewNum;) 

		//Changing the total into currency 
		totalCurrency = currencyFormat(total); 
		console.log('totalCurrency: ' + totalCurrency); 

		//Making it show in a table. Append is a jquery function that lets you stack stuff -- Finding the ID entries in the HTML and creating a new table row with the value of the input as a currency  
		$('#entries').append('<tr><td>' + entryNewCurrency + '</td></tr>'); 


		//Making it show in the html (replacing text with the total currency) -- Finding the ID total in the HTML and updating the text to the value of the total as a currency 
		$('#total').text(totalCurrency); 

	}



	function currencyFormat(numberToConvert) {
		//numberToConvert will be whatever number is passed to the function in parenthesis. This will either be the number a user inputs or the total. 

		//Take the number that was passed to the currencyFormat function and make sure that it has two decimal places 
		var currency = numberToConvert.toFixed(2); 

		//Adding a dollar sign to the decimal number we just created. This will convert the number to a string. 
		var currencywithDollar = '$' + currency; 

		//Gives the final currency with a dollar sign 
		return currencywithDollar
	}





}); 