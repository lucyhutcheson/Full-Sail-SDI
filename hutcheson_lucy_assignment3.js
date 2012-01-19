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

// Global variables
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
		console.log("Okay " + dogStylist + ", it looks like we have dogs to wash today.");
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



var json = {
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
			"uuid": "522",
			"name": "Samson",
			"diet" : "Iams"
		}
	]
}

var handleData = function(json) {
	for (var i=0; i<json.dogs.length;i++){
		var dog = json.dogs[i];
		console.log("Client ID: " + dog.uuid + ", Name: " + dog.name + ", Diet: " + dog.diet);
	}
};
handleData(json);

// take javascript object and make it a string
var jsonstring = JSON.stringify(json);
console.log(jsonstring);

// take the string and make it a javascript object
var receivedjson = JSON.parse(jsonstring);
console.log(receivedjson);



// constructor is a function that builds objects, Module pattern
var dogClient = function(name) {
	// private
	var dogStomach = [];
	var crew = [];
	var feedDog = function(item) {
		if (item !== "dog food") {
			dogStomach.push(item);
		} else {
			console.log("Not allowed to feed dog non-dog food!");
		}
	};
	var dogDiet = function() {
		for (var n=0; n < feedDog.length; n++) {
			console.log(name + " cargo " + n + ": " + dogStomach[n] + ".");
		}
	};
	var getName = function(){return name;};
	return { //public
		"name": getName,
		"feedDog": feedDog,
		"dogDiet": dogDiet
	};
};
var percy 	= dogClient("Percy");
var fifi 	= dogClient("Fifi");
var butch 	= dogClient("Butch");
var samson	= dogClient("Samson");

//api: application programming interface
percy.feedDog("oranges");
percy.feedDog("elephants");
percy.dogDiet();
console.log(percy);
console.log(percy.name()); // getter, accessor





var employee = {
	realName:	"Emily Dickinson",
	position:	"Dog Stylist",
	married:	true,
	jobs:		["Lulu’s Pampered Pet Salon", "Pampered Chef Consultant"],
	announce: function(message) {console.log(message)},
	washDog:	function(dogName){},
	getDog:		function(){	},
	getRealName: function(){},
	salon: {},
	dogNumber: 8};
	
employee.announce("Our total dogs to wash today is " + employee.dogNumber + ".");	
var myName = employee.getRealName(); //accessor method
employee.announce("Well I'm determined to finish all these dogs or my name isn't " + myName + "!");
employee.washDog(dogNumber); //mutator + procedure method
var mess = employee.dropsBucket(); //function mehtod
employee.cleanMess(mess, job); //object argument
	




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

