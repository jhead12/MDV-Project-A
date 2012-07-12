/*
	Joshua Head
	Assignment 2
	SDI 1207
*/



/*
	
	# The contestant name var contestant ="John"; had been cooking his first meal in the contest for
cooking time var cookTime = 20; and he still had to put in the second food item. He only cooked some
foodItems = [ "chicken" , "fruits", "potatoes", "desert"].

 Is time to var cookDish = function(meal){...};? It looks like I have var mealsLeft = meals.length; to
go. The Judges say that there are 30 Mins left, and if the competition (mealsLeft > 0) ends.

 As the "John" looks at the clock the time is wining down var timeLeft = 0; timeNumber < time.length;
timeNumber--), There we there was a missing item that was needed missingItem = function(call,
words){...}. the result came out to be that: return "there are none of the items that you are looking
for!"
*/


var contestant ="John";
var cookTime = 60;
var foodItems = ["chicken", "fruits", "potatoes", "desert"];
var startTime = true;
var say = function(message){
	console.log(message);
};

// Procedure
var start = function () {
	if (startTime) {
		say('The first contestant name is ' + contestant + ' He will making  these 4 Items ' + foodItems );	
		say( "The clock has started " +  "You will have " + cookTime + " minutes to Make your dish, Go!!")}
		
		else{
			
			say(" The contest has not began!")
			
		};
			
		
};
	
start();


// String Function

var desertNow = function (desert, fruit){
	
	var desert1 = desert + " chocolate "
	var appleTurn = fruit + " pie"
	
	say("desert is " + desert1 + appleTurn);
	
	 return appleTurn;
	
	
	
};


	say(desertNow("iceCream", "apples"));



// Number Function

var getTime = function(minutes){
	
	
	while ( minutes > 20){
		say(" There are " + minutes + " Left!");
		minutes-=2;
		
		
};

	if (minutes == 19) {
		say("Time is Running Low there " + minutes + " left!");
		};	
	while ( (minutes > 0)  &&  (minutes < 19) ) {
		
		say("Time is Running Low there are " + minutes);
		minutes--;}
		
		say("The contest is Over");
		return minutes;	
		
};
			
			
		
	
		

var minutesLeft = getTime(cookTime);





// Arrary Function- all the ingrediance that were used for the contest

var allMeals = function (extra){
		var ingredient = [ "salt", "pepper", "cummin", "rosemary"];
		ingredient.push(extra);
		
	for (var i=0; i < ingredient.length; i++) {
			say( "One of the ingredients that were used for these meals is " + ingredient[i])
	};
		
	return ingredient;	


};

var ingredient = allMeals("parsly");

say( "Here is the list of Ingredients " + ingredient );

var cookingTime = getTime(cookTime);


// Boolean Function

var whatsCooking = function( item, time){
		// Estimated CookTimes
		
		var chickenDone = true;
		var desertDone = true;
		var potatoDone = false;
			
	if ( time < 20) {
		
		
		say( "The " + item +  " should be cooked first! because there is not enough time because its over smh!" );
		return time;
	}
	if ( (chickenDone && desertDone )|| (chickenDone) ){
		say("we are Making good Time!");
	
	}		
	return timeLeft;

};
var whatsDone = whatsCooking(foodItems[3], minutesLeft );

say( whatsDone);






	
	


