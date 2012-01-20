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

console.log(receivedjson["dogs"][0].name);

// Global Variables
var dogStylist = "Mary",
	dogNumber = receivedjson["dogs"].length;
	dogNames = function(){
		for (var n=0; n < receivedjson["dogs"].length; n++) {
			var name = receivedjson["dogs"][n].name;
			return name; // return string
		}
	},
	weHaveDogs = true,
	washTimePerDog = [ 15, 20, 30, 10 ];

// my object
var dogStylist = {
		realName:	"Mary Christmas",// property
		position:	"Dog Stylist",
		married:	true,
		jobs:		["Lulu’s Pampered Pet Salon", "Pampered Chef Consultant"],
		announce: 	function(message) {
			console.log(message);
		},
		checkDogs: function(dogNumber) {
			if (dogNumber > 0){
				var dogsToFeed = "Let's get started! Our total dogs to feed today is " + dogNumber + ".";
				console.log(dogsToFeed);
			} else {
				var dogsToFeed = "We have no dogs today."
				console.log(dogsToFeed);
			};
		},
		getRealName: function(){
			var realName = dogStylist.realName;
			return realName;
		},
		feedDog: function(name, diet){
			var preparedFood = "Add " + diet + " dog bowl.";
			return preparedFood;
		},
		cleanMess: function(){}
	},
	dog = {
		getFood: function(name,food) {
			var dogStomach = [];
			var eatFood = function(item) {
				if (item === food) {
					dogStomach.push(item);
				} else {
					console.log("I'm sorry.  You are not allowed to feed this dog food that is not in their diet.");
				}
			};
			var processFood = function() {
				for (var n=0; n < feedDog.length; n++) {
					var dogDiet = name + " was fed " + dogStomach[n] + ".";
					return dogDiet; // return string
				}
			};
			var getName = function(){return name;};
			return { //public, this is my object
				"eatFood": eatFood,
				"processFood": processFood
			};
		},
		makeAMess: function(food) {
			var dogMess = food + " all over the floor.";
			console.log(dogMess);
		}
	};
	
dogStylist.checkDogs(dogNumber);
dogStylist.announce("Here's their information.");
var getData = function(json) {
	var i = 0;
	while (i<json.dogs.length){
		var dog = json.dogs[i];
		console.log("Client ID: " + dog.uuid + ", Name: " + dog.name + ", Diet: " + dog.diet);
		i++;
	};
};
getData(jsonDogData);

var myName = dogStylist.getRealName(); //accessor method
dogStylist.announce("Well I'm determined to finish all these dogs or my name isn't " + myName + "!");

dogStylist.feedDog("Percy", "Purina"); //mutator + procedure method
var mess = dog.makeAMess("Purina"); //function mehtod
dogStylist.cleanMess(mess); //object argument
	

var percy 	= dog.getFood(dogNames[0],"Purina");

//api: application programming interface
percy.eatFood("oranges");
percy.eatFood("Purina");

console.log(percy.processFood());
console.log(percy.name()); // getter, accessor
console.log(percy.getDogDiet()); // getter, accessor



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
