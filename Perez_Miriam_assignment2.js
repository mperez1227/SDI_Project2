/* Miriam Perez
January 7, 2012
Deliverable 2
"Fun Times"
*/

//alert("JavaScript works!");


var movieType1 = "comedy",
	movieType2 = "action",
	movieType3 = "drama",
	actionFilm = '"Mission: Impossible"',
	comedyFilm = '"Jack & Jill"',
	dramaFilm = "Girl with the dragon tattoo",
	destination = "movies",
	thisWeekend = "Friday",
	numMovieChoices = 2,
	thisSaturday = false,
	thisFriday = true;

//Procedure Function

function dayAgreedOn (thisWeekend) {
	
console.log("We are going out this " + thisWeekend + ", so we will only go watch a movie.");
}

dayAgreedOn (thisWeekend);

if (thisFriday === true) {

	console.log("I want to see a good " + movieType1 + ".");

} else {

	console.log("We will end up watching an " + movieType2 + " film.");

};

//Boolean Function

var getWhichGenre = function (actionFilm, comedyFilm) {
	var choice = (2 == 2);

if (numMovieChoices >= 2) {
	console.log("There are two movies that we will vote on, " + actionFilm + " or " + comedyFilm + ".");
	
	}else {
	console.log("We can choose to watch a " + movieType3 + ".");
	}
	choice = true;
	return choice;
};

var whichGenre = getWhichGenre ('"Mission: Impossible"', '"Jack & Jill"');
console.log('Is it true that the majority chose to watch "Mission: Impossible"? ' + whichGenre);





