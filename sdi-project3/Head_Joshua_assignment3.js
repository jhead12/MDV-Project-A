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
	cooking: [ "Chicken Lasagna", "Spanish Pie"],	ready: true;
};var say = function(message){		console.log(message);};var timer= 120;var dishOrder = [ "appetizer", "drink", "main Dish", "desert"];var handleData = function(json){		for (var i = 0; i < json.panels.length; i++){		var judge = json.panels[i];		console.log( "Judges name is " + judge.fullName + ". " +  judge.first + " favorite   food to eat is " + judge.favoriteDish + ". " );		};		};handleData(judges);say(contestant);