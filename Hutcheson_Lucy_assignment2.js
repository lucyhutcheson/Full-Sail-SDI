/**
 * Deliverable 1
 * @author Lucy Hutcheson
 * Date: 2012-01-05
 * Created for:  SDI Online
 * Lucy Gets Engaged
 */

// Initial variables
var boy = "Jason",
	girl = "Lucy",
	guam = "Guam, which is \"Where America's Day Begins\"",
	numberOfRings = 1,
	girlAndDaughter = 2,
	LetsDoThis = true
;

// Initial output
console.log(boy, " and ", girl, " have been friends for years. ");
console.log(girl, "'s family includes her daughter, Laury, making it a family of ", girlAndDaughter, ". ");
console.log(boy, " leaves ", guam, " and goes to Texas for vacation. ");
console.log(boy, " buys ", numberOfRings, " engagement ring to propose to ", girl, ". ");
console.log("Should ", boy, " go back to Guam and propose to ", girl, "? ", LetsDoThis);


if (LetsDoThis) {
	if (numberOfRings > 0) {
		console.log(boy, "says, \"Will you marry me?\" ");
		newFamilySize = girlAndDaughter + 1;
		console.log("If she says yes, their new family size will be", newFamilySize, ".  She'll probably say yes.");
	} else {
		console.log("Um.. I'll come back later. I don't have the engagement ring. ");
	}
} else {
	if (girl === "Lucy") {
		console.log(girl, " flies to Texas to get proposed to. ");
	} else {
		reassure = "Aww.." + boy + " there's only one girl for you. ";
		console.log(reassure);
	}
}

alert("Will Lucy Get Engaged?");