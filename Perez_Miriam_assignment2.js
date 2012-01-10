/* Miriam Perez
January 7, 2012
Deliverable 2
"Fun Times"
*/

//alert("JavaScript works!");


var movieType1 = "comedy";
	movieType2 = "action";
		thisFriday = true;

//Procedure Function

function dayAgreedOn (thisFriday) {
var day = "Friday";
var destination = "movies";
	
console.log("We are going out this " + day + ", so we will only go to the " + destination + ".");
}

dayAgreedOn (thisFriday);

if (thisFriday === true) {

	console.log("I want to see a good " + movieType1 + ".");

} else {

	console.log("We will end up watching an " + movieType2 + " film.");

};

