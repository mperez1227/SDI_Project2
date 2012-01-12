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
console.log("Now we go find our seats.")

//Number Function

var getNumOfSeats = function (numOfSeats) {
	var groupCount= 1;

console.log("We need to find " + numOfSeats + " seats that are next to each other, so we start looking around.");
while (groupCount <= 4) {
	console.log("There are " + groupCount + " seats next to each other.");
	groupCount ++;
	}
	howMany = "four";
	return howMany;
};
var neededSeatAmt = getNumOfSeats(4);
console.log("Awesome! We found a section with " + neededSeatAmt + " seats next to each other.");
console.log("So all " + neededSeatAmt + " of us can sit together.")

//String Function

var getFood = function (drink, food) {
	var boyFriend = "amazing";
	
	console.log("My boyfriend is " + boyFriend + ". He bought me a " + drink + " and " + food + ".");
	awesome = "This is now my dinner.";
	return awesome;
};

var hungry = getFood("soda", "pizza");
console.log("Since we rushed to the movies, I didn't get to eat.");
console.log(hungry)

//Array Function

var getDrinks = function (groupCount, placesToGo) {
	var otherCousin = "Kathy";
	
	console.log("We wanted to go out for a few drinks and called my cousin " + otherCousin + ".");
	console.log("We picked her up and now there are " + groupCount + " of us. We will go to " + placesToGo + ".");
	console.log("My boyfriend isn't much of a drinker so he didn't have drinks and was the designated driver.");
	console.log("I wanted to drink Mojitos and decided to drink three.");
for (var drinks = 3; drinks > 0; drinks --) {
	console.log("Finished my drink number " + drinks + ".");
};
	howMany = "We all had a fun night!";
	return howMany;
	
};
var wantDrinks = getDrinks(5, ["Fat Tuesday", " Bayside Hut", " or any near by pub"]);
console.log(wantDrinks)
