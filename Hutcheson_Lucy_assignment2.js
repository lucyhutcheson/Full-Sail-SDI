/**
 * Deliverable 1
 * @author Lucy Hutcheson
 * Date: 2012-01-05
 * Created for:  SDI Online
 * Lucy Gets Engaged
 */

// Initial variables
var dogStylist = "Emily",
	daysWorking = 8,
	weHaveDogs = true,
	dogNames = ['Percy', 'Fifi', 'Butch', 'Samson'],
	wholeMinutesPerDog = [ 15, 20, 30, 10 ];

var greetStylist = function(dogStylist) {
	if (dogStylist === 'Emily') {
		console.log("Welcome " + dogStylist + "! Let's check if we have any dogs to wash today.");
	} else {
		console.log("We have no stylists today.");
	}
};
greetStylist(dogStylist);

var checkForDogs = function(dogStylist, weHaveDogs) {
	if (weHaveDogs === true) {
		console.log("Okay " + dogStylist + ", we have dogs to wash today.");
	} else {
		console.log("We have no dogs to wash today.");
	}
	return(weHaveDogs);
};
checkForDogs(dogStylist, weHaveDogs);

var washAllDogs = function(dogNames, minutesPerDog) {
	var dogsToWash = dogNames.length;
	while (dogsToWash > 0) {
		console.log("\"" + weHaveDogs + " I have " + dogsToWash + " dogs left to wash,\" " + dogStylist + " says.");
		dogsToWash = dogsToWash - 1;
		var dogName = dogNames[dogsToWash],
			minutesThisDog = minutesPerDog[dogsToWash];
		washOneDog(dogName, minutesThisDog);
	} // for dogsToWash
	return(dogsToWash);
	console.log("We have " + dogsToWash + " left to wash.");

}; // washAllDogs


var washOneDog = function(dogName, minutesThisDog){
	console.log("Starting to wash " + dogName + " for " + minutesThisDog + " minutes.");
	for (var minutes = 0; minutes < minutesThisDog; minutes +=5) {
		var minutesRemain = minutesThisDog - minutes;
		console.log(minutes + " minutes done, " + minutesRemain + " to go!");
	}
	console.log ("I'm done with " + dogName + ".");
	var myMessage = sayMessage(dogStylist, dogName);
	console.log(myMessage);
};

var sayMessage = function(dogStylist, dogName) {
	message = ("\"You're all squeeky clean now, " + dogName + "!\" says " + dogStylist);
	return(message);
}
washAllDogs(dogNames, wholeMinutesPerDog);



