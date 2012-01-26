/**
 * Deliverable 4
 * @author Lucy Hutcheson
 * Date: 2012-01-26
 * Created for:  SDI Online
 * Custom Libraries
 */


// Math Library
var mathLibrary = function(){
	var validateCurrency = function(amount) {
		var start = amount.indexOf(".");
		var end = amount.length;
		if (amount.indexOf(".") === -1) {
			var validAmount = (amount + ".00");
			return validAmount;
		} else if (amount.substring(start, end).length < 2){
			var validAmount = (amount + "00");
			return validAmount;
		} else if (amount.substring(start,end).length < 3 ){
			var validAmount = (amount + "0");
			return validAmount;
		} else {
			var validAmount = (Math.round(amount*100)/100);
			return validAmount;
		};
	};
	var  stringToNumber = function(stringNumber) {
		var number = Number(stringNumber);
		return number;
	};
	return {
		"validateCurrency" : validateCurrency,
		"stringToNumber" : stringToNumber
	};
};

// test math variables
var amount = "5.125";
var number = "42";
var mathLib = mathLibrary();

var validCurrency = mathLib.validateCurrency(amount); // return valid currency
console.log(validCurrency);

var validNumber = mathLib.stringToNumber(number); // return valid number
console.log(validNumber);



// String Library
var stringLibrary = function() {
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
		} else {
			return email;
		};
	};
	var validateURL = function(url) {
		if (url.substring(0,7) === "http://" || url.substring(0,8) === "https://") {
			return url;
		} else {
			alert("URL is invalid. Please try again.");
		}
	};
	var capitalize = function(myString) {
		var myStringLength = myString.length;
		var wordPieces = myString.split(" ");
		var capitalizedWords = [];
		while (capitalizedWords.length < wordPieces.length) {
			for (var i=0;i<wordPieces.length;i++) {
				var firstLetter = wordPieces[i].substring(0,1); // get first letter
				var capitalLetter = firstLetter.toUpperCase();
				var restOfWord = wordPieces[i].substring(1, wordPieces[i].length);
				var newWord = capitalLetter + restOfWord;
				capitalizedWords.push(newWord);
			}
		};
		var capitalizedString = capitalizedWords.join(" ");
		return capitalizedString;
	};
	return {
		"validatePhone" : validatePhone,
		"validateEmail" : validateEmail,
		"validateURL" : validateURL,
		"capitalize" : capitalize
	};
};

// test variables
var phoneNumber = "1234567890";
var email = "lucyhutcheson@fullsail.edu";
var url = "http://www.fullsail.edu";
var myString = "full sail online";
var stringLib = stringLibrary();

var validNumber = stringLib.validatePhone(phoneNumber); // return validated number
console.log(validNumber);

var validEmail = stringLib.validateEmail(email); // return valid email
console.log(validEmail);

var validURL = stringLib.validateURL(url); // return valid url
console.log(validURL);

var capitalizedString = stringLib.capitalize(myString); // return capitalized string
console.log(capitalizedString);
