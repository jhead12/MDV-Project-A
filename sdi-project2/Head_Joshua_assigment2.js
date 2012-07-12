/*
	Joshua Head
	Assignment 2
	SDI 1207
*/



/*
	
	# The contestant name var contestant ="John"; had been cooking his first meal in the contest for
cooking time var cookTime = 20; and he still had to put in the second food item. He only cooked some
foodItems = [ "chicken" , "vegetables", "potatoes", "desert"].

 Is time to var cookDish = function(meal){...};? It looks like I have var mealsLeft = meals.length; to
go. The Judges say that there are 30 Mins left, and if the competition (mealsLeft > 0) ends.

 As the "John" looks at the clock the time is wining down var timeLeft = 0; timeNumber < time.length;
timeNumber--), There we there was a missing item that was needed missingItem = function(call,
words){...}. the result came out to be that: return "there are none of the items that you are looking
for!"
*/


var contestant ="John";
var cookTime = 60;
var foodItems = ["chicken", "vegetables", "potatoes", "desert"];
var startTime = true;
var say = function(message){
	console.log(message);
};

// Procedure
var start = function () {
	if (startTime) {
		console.log( "The clock has started " +  "You will have " + cookTime + " minutes to Make your dish, Go!!")}
		
		else{
			
			say(" The contest has not began!")
			
		};
			
		
};
	
start();

// Number Function

var getTime = function(minutes){
	
	
	while ( minutes > 10){
		say(" There are " + minutes + " Left!");
		minutes-=2;
		
		
};

	if (minutes <= 10) {
		say("There are lest than 10 minutes to Go!");
		return minutes;
		
	};
	
	say("The contest is Over");
	
		
};

getTime(cookTime);
// Boolean Function

var whatsCooking = function( item, time){
		var chickenTime = 20;
		var potatoTime= 15;
		var timeLeft = Math.floor(time - cookTime);	
	if ( item != "vegatables" || "desert") {
		
		say( "This" + item +  " should be cooked first! because there is not enough time left!");
		return;
	}
	else{
		timeLeft = Math.floor(time - cookTime);
	
	}		
	return timeLeft;

};
var whatsDone = whatsCooking(foodItems[3], 10);

say('We are making good time with our meals' + whatsDone)



// String Function

// Arrary Function
