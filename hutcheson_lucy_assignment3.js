/**
 * Deliverable 3
 * @author Lucy Hutcheson
 * Date: 2012-01-19
 * Created for:  SDI Online
 * Lucy Gets Engaged
 */

/*
 * Accessor method: function that returns a property "getter"
 * Mutator method: function that changes a property "setter"
 * Procedure: subroutine(function) that don't return a value
 * Property: key in an object
 * Method: function in an object
 */

/*
 * Story:  Emily works at the Dog salon.  She needs to wash and feed the dogs.
 * Each dog has a certain diet.
 */

// JSON Data
var jsonDogData = {
	"dogs" : [
		{
			"uuid": "520",
			"name": "Percy",
			"diet" : "Purina"
		},
		{
			"uuid": "521",
			"name": "Fifi",
			"diet" : "Eukanuba"
		},
		{
			"uuid": "522",
			"name": "Butch",
			"diet" : "Science Diet"
		},
		{
			"uuid": "523",
			"name": "Samson",
			"diet" : "Iams"
		}
	]
};
// take javascript object and make it a string
var jsonstring = JSON.stringify(jsonDogData);

// take the string and make it a javascript object
var receivedjson = JSON.parse(jsonstring);


// Global Variables
var dogStylist = "Mary",
		dogNumber = receivedjson["dogs"];
		anyDogsToday = true;


// my object
var dogStylist = {
		realName:	"Mary Christmas",// property
		position:	"Dog Stylist",
		jobs:		["Lulu's Pampered Pet Salon", "Pampered Chef Consultant"],
		announce: 	function(message) {
			var quotes = "\"";
			announcement = quotes + message + quotes;
			console.log(announcement);
		},
		checkDogs: function(anyDogsToday) {
			var dogStatus = anyDogsToday;
			if (dogStatus === true) {
				dogStylist.announce("It's " + dogStatus + ".  We have dogs today.");
				dogStylist.countDogs(dogStatus, dogNumber);
			} else {
				dogStylist.announce("It's " + dogStatus + ".  We don't have dogs today.");
			};
		},
		// method: procedure
		countDogs: function(dogStatus, dogNumber) {
			if (dogStatus === true) {
				dogStylist.announce("Let's get started! We have ");
				for (var n=0; n <= dogNumber.length; n++){
					var dogsToFeed = n;
					dogStylist.announce(dogsToFeed);
				}
				dogStylist.announce(" dogs to feed today.");
				return dogStatus;
			} else {
					dogStylist.announce("We have no dogs today. ");
			};
		},
		getRealName: function(name){
			var realName = name;
			return realName;
		},
		// method: accessor
		getData: function(json) {
			var i = 0;
			while (i<json.dogs.length){
				var dog = json.dogs[i];
				dogStylist.announce("Client ID: " + dog.uuid + ", Name: " + dog.name + ", Diet: " + dog.diet);
				i++;
			};
			return json;
		},
		getDogs: function() {
			for (var n=0; n < receivedjson["dogs"].length; n++) {
				var name = receivedjson["dogs"][n].name;
				dogStylist.announce("Come 'ere, " + name + "!"); // return string
			}
		},
		// method: mutator
		feedDog: function(name, diet){
			var dogBowl = [];
			var prepareFood = function(item) {
				if (item == diet) {
					dogBowl.push(item);
					dogStylist.announce(dogBowl);
				} else {
					dogStylist.announce("This isn't the right food!");
				}
			}
			var preparedFood = "Time to add " + diet + " to the dog bowl for " + name + ".";
			dogStylist.announce(preparedFood);
		},
		// method: function
		cleanMess: function(mess){
			dogStylist.announce("Aww man. Now I have to clean because " + mess);
			var mess = mess.length;
			for (var messCleaned = 0; messCleaned < mess; messCleaned +=8) {
				dogStylist.announce(messCleaned + " mess cleaned up.");
				if (mess > messCleaned) {
					var messLeft = mess - messCleaned;
					dogStylist.announce(messLeft + " more to go!");
				};
			}
			dogStylist.announce("Phew!  I'm done.  Time for lunch! I'll see the rest of you when I get back.");

		}
	},
	dog = {
		makeAMess: function(dog,food) {
			var dogMess = dog + " got " + food + " all over the floor.";
			console.log(dogMess);
			return dogMess;
		}
	};
dogStylist.announce("Welcome to " + dogStylist.jobs[0] + "!  I am a " + dogStylist.position + ".");
dogStylist.checkDogs(anyDogsToday);
dogStylist.announce("Here's their information.");
dogStylist.getData(jsonDogData);
var myName = dogStylist.getRealName(dogStylist.realName); //accessor method
dogStylist.announce("Well I'm determined to finish at least one dog before lunch or my name isn't " + myName + "!");
dogStylist.getDogs();
dogStylist.feedDog("Percy", "Purina"); //mutator + procedure method
var mess = dog.makeAMess("Percy", "Purina"); //function method
dogStylist.cleanMess(mess); //object argument
	




/*

// take the string and make it a javascript object
var receivedjson = JSON.parse(jsonstring);
console.log(receivedjson);

// take javascript object and make it a string
var jsonstring = JSON.stringify(jsonDogData);
console.log(jsonstring);

* 
* */




/*
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
		console.log("Okay " + dogStylist + ", it looks like we have dogs to wash today.");
	} else {
		console.log("We have no dogs to wash today.");
	}
	return(weHaveDogs);
};
checkForDogs(dogStylist, weHaveDogs);

var getData = function(json) {
	for (var i=0; i<json.dogs.length;i++){
		var dog = json.dogs[i];
		console.log("Client ID: " + dog.uuid + ", Name: " + dog.name + ", Diet: " + dog.diet);
	}
};
getData(jsonDogData);


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
washAllDogs(dogNames, washTimePerDog);





var arr = [true, false, "", [], function(){}, 101];

var student = {
	id: "0000111", 
	job: "teacher", 
	name: "Mike", 
	interests: [
		"Javascript", 
		"HTML", 
		"CSS", 
		"FLASH"
	],
	// Key in an object that specifies a value is called Property
	age: 503423,
	// Function in an object is called Method
	sayHi: function() {
		console.log("Hi");
	}
};


student.name = "Bob";

var key = "name";

console.log(student[key]);
console.log(student["interests"][1]);
console.log(student.interests);



student.sayHi();
student.sayHi = function() {
	console.log("Get lost.");
}

student["sayHi"]();
for (var key in student) {
	console.log("key: " + key + ", value: ", student[key]);
};
*/
