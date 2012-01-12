/**
 * Deliverable 1
 * @author Lucy Hutcheson
 * Date: 2012-01-05
 * Created for:  SDI Online
 * Lucy Gets Engaged
 */

// Initial variables

/*var pi = 3.14159;
var radius = 5;

var getArea = function (r) {
	var area = r * r * pi;
	return ;
};

var reportArea = function(name,area,message){
	console.log(name + "'s circle has " + area + " area, and " + message);
}

var area = getArea(60);
reportArea('Ceiling cat', area, 'is all seeing');

*/

var buyMilk = function(givenCash) {
	var pricePerGallon = 3,
		wholeGallons;
	if (givenCash < pricePerGallon) {
		console.log("That's not enough to buy anything!");
		wholeGallons = 0;
	} else { 
		wholeGallons = Math.floor(givenCash / pricePerGallon);
	}
	return wholeGallons;
};
var gotGallons = buyMilk(1);
console.log("Thanks for buying " + gotGallons + " gallons of milk!");


var getGreetingByName = function(name) {
	var currentHour = (new Date()).getHours(),
		timeOfDay, greeting;
	if (currentHour < 12) { timeOfDay = "morning"; }
	else if (currentHour < 17) { timeOfDay = "afternoon"; }
	else { timeOfDay = "evening"; }
	greeting = "Good " + timeOfDay + ", " + name + "!";
	return(greeting);
};
var fullGreeting = getGreetingByName("Lucy");
console.log(fullGreeting);



var dogNamesWithSpaces = ['Percy', 'Fifi', 'Butch', 'Samson'],
	wholeMinutesPerDog = [ 45, 20, 30, 60 ];

var washOneDog = function(dogName, minutesThisDog){
	console.log("Starting to wash " + dogName + " for " + minutesThisDog + " minutes.");
	for (var minutes = 0; minutes < minutesThisDog; minutes +=5) {
		var minutesRemain = minutesThisDog - minutes;
		console.log(minutes + " done, " + minutesRemain + " to go!");
	}
	console.log ("I'm done with " + dogName + ".");

};

var washAllDogs = function(dogNames, minutesPerDog) {
	for (var dogNumber = 0; dogNumber < dogNames.length; dogNumber++) {
		var dogName = dogNames[dogNumber],
			minutesThisDog = minutesPerDog[dogNumber];
		washOneDog(dogName, minutesThisDog);
	} // for dogNumber
}; // washAllDogs

washAllDogs(dogNamesWithSpaces, wholeMinutesPerDog);

