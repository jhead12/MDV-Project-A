//alert("JavaScript works!");

/*
	In the food contest there are three judges who have three personalities and professions.
	They are unbias with their judging, however, there is an influence with the decisions.
	In watching the contestant making three meals, the judges will make a comment on
	the decisions that were made by the chef. They final decision of the contestant
	will be made after the judges taste the food. There is an Hour for the contestant
	to make all three dishes. They are required to make plates that they were
	inspired by var contestant = [ name:"John", culture: "spanish",] etc. 
*/


// Global Variables

var contestant = {
	chefName:"John",
	type : "Spanish",
	cooking: [ "Eggplant Parmigiana", "Grilled Peaches with Wine Syrup"],	ready: true
};var eggplant = {		ingredients: ["Extra-virgin olive oil","2 large eggplant about 2 pounds","Salt and pepper","2 cups basic tomato sauce, recipe follows", "1 bunch fresh basil leaves, chiffonade", "1 pound fresh mozzarella, sliced 1/8-inch thick", "1/2 cup freshly grated Parmigiano-Reggiano", "1/4 cup fresh bread crumbs, lightly toasted under broiler"],		prepTime: 10,		cookTime: 35,		cookStart: function (time) {											}};	var grilledPeaches = {			ingredients: [ ["2 1/2 cups red Spanish table wine","1/2 cup peach nectar", "1/4 cup brandy", "1/4 cup plus 2 tablespoons sugar", "2 tablespoons honey, plus more for garnish", "2 cinnamon sticks", "1 vanilla bean, split"], ["1/2 stick unsalted butter", "6 ripe peaches, halved and pitted","Sugar","Ground cinnamon"], ["Ground cinnamon", "Fresh mint leaves", "Canola oil", "Kosher salt and freshly ground black pepper"], ["1/2 cup creme fraiche", "Honey","Fresh mint leaves"]],			bobbyFlay: true,			prepTime: 30,			cookTime: 20			}; 	var say = function(message){		console.log(message);};var announcer= {	name:"Steve",	begin: function (start){		if(start){			say("Hello, and Welcome to the Chef challenge");			}					if(timerOn){			say("Start the clock for 60 mins!")			}		},	var timer= 120,	var timeOn= true,			};var dishOrder = ["main dish", "desert"];var handleData = function(json){		for (var i = 0; i < json.panels.length; i++){		var judge = json.panels[i];		console.log( "Judges name is " + judge.fullName + ". " +  judge.first + " favorite food to eat is " + judge.favoriteDish + ". " );						};		};say(grilledPeaches.ingredients[1]);handleData(judges);say(contestant);say(eggplant);say(grilledPeaches);var executePlan = function(time){while(timer > 0){		};		contestant.cooking[0]};