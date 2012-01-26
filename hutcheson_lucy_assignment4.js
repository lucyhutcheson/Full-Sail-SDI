/**
 * Deliverable 4
 * @author Lucy Hutcheson
 * Date: 2012-01-26
 * Created for:  SDI Online
 * 
 */

var makeSandwich = function (bread, meat, toppings) {
    //  Fill in working code here that builds a sandwich
    return { };
}

var pbj = makeSandwich("white", "peanut butter", ["grape jelly"]);
// pbj is an object that will eventually do something useful


// STRING
// each character in the string are represented by numerical indexes
// index 1 = "o"
var myString = "Some Text";
var length = myString.length
console.log(length);

//myString.substring(from, to) in index values
var substring = myString.substring(0,4);
console.log(substring); // returns "Some"

//myString.charAt(n) n=index will return the character
var character = myString.charAt(3);
console.log(character); // returns "e"

// indexOf will return the index.  if no index exists, it will return -1
var index = myString.indexOf("e");
console.log(index); // returns 3

// MATH
// round 
var answer = Math.round(2.5);
console.log(answer);

// round down
var answer = Math.floor(2.5);
console.log(answer);

// round up
var answer = Math.ceil(2.5);
console.log(answer);

// random between 0 and whatever number it is multiplied by 
// this will give a random number between 0 and 9
var answer = (Math.random() * 10) ;
console.log(answer);

// this will round the number down to a whole number
console.log(Math.floor(answer));

// this will shift the answer from between 0-9 to 1-10
var answer = (Math.random() * 10) + 1;
console.log(answer);
console.log(Math.floor(answer));



// LIBRARY - Revealing Module Pattern
var ninjaLibrary = function () {
    // TODO: add some private variables here
    var throwingStars, toeShoes;
    // TODO: add some private methods here
    var signal = function (message) {};
    // TODO: reveal the public methods here
    return {
        "signal" : signal
    };
};

// this is how you use it
var ninjaLib = ninjaLibrary();
ninjaLib.signal("This is a message");

var phoneNumber = "1234567890";
var email = "lucygmail.com";
var stringLibrary = function(phoneNumber) {
	var validatePhone = function(phoneNumber) {
		 if (phoneNumber.indexOf("-") === -1) {
		 	var areaCode = phoneNumber.substring(0,3);
			var phoneFirst = phoneNumber.substring(3,6);
			var phoneLast = phoneNumber.substring(6,10);
			var validNumber = (areaCode + "-" + phoneFirst + "-" + phoneLast);
			return validNumber;
		 } else {
		 	return validNumber;
		 };
	};
	var validateEmail = function(email) {
		if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
			alert("Email address is invalid.  Please try again.");
		};
	};
	return {
		"validatePhone" : validatePhone,
		"validateEmail" : validateEmail
	};
};
var stringLib = stringLibrary();
var validNumber = stringLib.validatePhone(phoneNumber); // return validated number
console.log(validNumber);

stringLib.validateEmail(email); // return if email is valid


