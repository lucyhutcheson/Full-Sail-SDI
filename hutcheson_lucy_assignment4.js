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
