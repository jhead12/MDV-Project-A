//alert("JavaScript works!");/*Joshua Head1207*//*StringsDoes a string follow a 123-456-7890 pattern like a phone number?Does a string follow an aaa@bbb.ccc pattern like an email address?Is the string a URL? (Does it start with http: or https:?)Title-case a string (split into words, then uppercase the first letter of each word)  Given a string that is a list of things separated by a given string, as well as another string separator, return a string with the first separator changed to the second: "a,b,c" + "," + "/" → "a/b/c".NumberFormat a number to use a specific number of decimal places, as for money: 2.1 → 2.10Fuzzy-match a number: is the number above or below a number within a certain percent?Find the number of hours or days difference between two dates.Given a string version of a number such as "42", return the value as an actual Number, such as 42ArrayFind the smallest value in an array that is greater than a given numberFind the total value of just the numbers in an array, even if some of the items are not numbers.Given an array of objects and the name of a key, return the array sorted by the value of that key in each of the objects: "a" + [{a:2},{a:3},{a:1}] → [{a:1},{a:2},{a:3}].*///My Libraryvar myLibrary = function(){//String//Make Up: For Missing Flow Chart Elements assignment 3 --Phone Number Function 		var phoneNumber = function(number){		var phoneNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

	if (number == phoneNum.test(number)) {
			var formattedPhoneNumber =
			    number.replace(regexObj, "($1) $2-$3");			    			    console.log("valid Phone Number")
			} else {
			// Invalid phone number			console.log("invalid number")			}
			};//Email 		var emailAd = function(email){				 var x = email;		 var atpos = x.indexOf("@");		 var dotpos = x.lastIndexOf(".");		 			 		 if (atpos <1 || dotpos < atpos+2 || dotpos+2>= x.length) 		 console.log( email + " is  not an email address");					return false				};		//URL String			var urlString = function(URL) {
				var x = URL;			var htpos = URL.indexOf("http://", "https://");		var wwpos = URL.indexOf("www.");		var compos = URL.lastIndexOf(".com", ".me", ".net");				if(htpos > wwpos || compos < 1 || compos+2>= URL.length ){				console.log("The web site address is incorrect");				return false		}		
		};	//Title Case	String.prototype.titleCase = function () {
	var str = "";
	var wrds = this.split(" ");
	for(keyvar in wrds)
	{
	str += ' ' + wrds[keyvar].substr(0,1).toUpperCase()
	 + wrds[keyvar].substr(1,wrds[keyvar].length);
	}
   return str;
}					 //String Splitvar stringSplit = function(number, radix){		return number.toString(radix);				console.log(number.toString(radix))};//DecimalPlacevar decimalPlace = function(number){		console.log(number.toFixed(2))		return number.toFixed(2);		};//	Fuzzy Match		var fuzzyMatch= function(compare, percent){		
    var dev= compare*(percent/100), n= +this;
   console.log( n>= compare-dev && n<= compare+dev);      		return dev
			};		// MakeUp: For Missing FlowChart Assignment 3			var dateChanges = function (dateDiff, hours){				//The current Day and Time						var today = new Date()//Start of Yearvar january = 0;			var startOfYear = new Date();
			startOfYear.setMonth(january);
			startOfYear.setDate(1);
			startOfYear.setHours(0, 0, 0, 0);									//The amount of msec per Minture						var msecPerMinute = 1000 * 60;//The amount of msec per Hour			
			var msecPerHour = msecPerMinute * 60;//The amount of usec per Day						var msecPerDay = msecPerHour * 24;			// The differences in milliseconds						var interval = today.getTime() - startOfYear.getTime();//Calculate the Amount of Days 			//			var days = math.floor(interval / msecPerDay);					var daysLeft = ((dateDiff.getTime() - today.getTime())/ msecPerDay);		var hoursLeft = ((hours.getTime() - today.getTime())/ msecPerHour);		//		console.log(hoursLeft);		console.log("There are " + Math.round(daysLeft) + " days till my Birthday")		};		//Make up: For missing FlowChart Elements- Convert to String		var stringConvert = function(string){				if ( isNaN(string)== false) {			var converted = parseFloat(string);						console.log(converted);		}
		else{				console.log("This is not a string")		};								return parseFloat					};//Array		var smallLarge = function (array){				var gNum = 23;						for (var i = 0; i < array.length; i++) {
	array[i]		if (array[i] > gNum ) {				gNum = array[i];					console.log("The smallest value in the given value is " + gNum);	}
}		return gNum							};								// Make Up: Missing FlowChart elements Assignment 3-----calculated the value of an Array				var valueFinder= function(array){				var sum = 0;				for (var i = 0; i < array.length; i++) {			if (!isNaN(parseInt(array[i]))) {			 sum += array[i];		}		console.log("This is the value of Array " + sum);		}	
};			return {				"stringSplit" : stringSplit,		"emailAd" : emailAd,		"urlString": urlString,		"phoneNumber": phoneNumber,		"String.prototype.titleCase ": String.prototype.titleCase ,		"decimalPlace": decimalPlace,		"fuzzyMatch": fuzzyMatch,		"dateChanges": dateChanges,		"stringConvert": stringConvert,		"valueFinder": valueFinder,		"smallLarge": smallLarge	};	};var myLib = myLibrary();myLib.stringSplit(4);myLib.emailAd("emaculanthbgmail.com");myLib.urlString("freshcom");myLib.phoneNumber("323.61.9203"); //invalid Number//Title Textvar string = "i am only trying to get a good grade!"string = string.titleCase();console.log(string);//fuzzy MatchmyLib.decimalPlace(3);myLib.fuzzyMatch(2,80);// Variable to use as example of date changervar today = new Date();var setUp = new Date("July 26, 2012");sameSetUp = new Date();sameSetUp.setTime(setUp.getTime());var myBday = new Date(today.getFullYear(), 11, 12);myLib.dateChanges(myBday, setUp );myLib.stringConvert("josh");myLib.valueFinder(["shoes", 1, "sweater", 5, 20]);myLib.smallLarge([3, 4, 14, 29, 31,40,62]);