// defining a function that returns the first character of the argument
function firstCharacter(str) {
	return str[0];
}

// defining a function that returns the last character of the argument
function lastCharacter(str) {
    return str[str.length - 1];
}

// Defining a function that returns the character at the position represented by the number.
function GiveACharacter(str, num) {
    if (num >=0) {
        return str[num];
    }
}

//Defining a function that takes two numbers and adds them together
// If I pass something other than a number to the function, it will return both argument writing together. 
function addition(num1, num2) {
    return num1 + num2;
}

//Defining a function that takes two numbers and multiplies them together
// If I pass something other than a number to the function, it will return NaN (Not a Number)
function multiplication(num1, num2) {
    return num1 * num2;
}


/*Defining a function that takes two numbers and a string.
It's the string that tells which arithmetic operators we have to use with the two numbers. 
If there is no string, it returns "0".*/
function stringTellsWhatToDo(num1, num2, str) {
    if (str === "add") {
        return num1 + num2;
    }
    if (str === "subtract") {
        return num1 - num2;
    }
    if (str === "mult") {
        return num1 * num2;
    }
    if (str === "div") {
        return num1 / num2;
    }
    else {
        return 0;
    }
}

//or

function stringTellsWhatToDoImproved(num1, num2, str) {
    switch(str) {
        case "add":
            return(num1 - num2);
        case "subtract":
            return(num1 - num2);
        case "mult":
            return(num1 * num2);
        case "div":
            return(num1 / num2);
        default:    
            console.log(0);
            
    }
}


// Defining a function that takes a string and a number, and returns the string repeated that many number of times


var stringRepeated = function(theString, num) {

        var count = 0;
        var result = "";
    
    while (count < num){
        result = result + theString;
        count ++;
    }
return result;
};


var stringRepeatedImproved = function(str, num) {
   
    var result = "";
   
    while (num >0) {
        result = result + str;
       num --;
    }
    return result;
}


// Defining a function that takes a string, and returns the reverse of that string
// I found the "recipe" of that function in : http://eddmann.com/posts/ten-ways-to-reverse-a-string-in-javascript/

function reverse(s) {
  var o = '';
  for (var i = s.length - 1; i >= 0; i--)
    o += s[i];
  return o;
}
 
//Defining a function that takes a number and returns the factorial of a number
//It doesn't work if it's a decimal number or a negative number
function factorial(n){
  if (n === 0 || n === 1) {
    return 1;
  } else {
  var j = 1;
  for(i=1; i<=n; i++){
    j = j*i;
  }
  return j;
    }
}


//Defining a function that takes a phrase as a string, and returns the longest word in that phrase. 
function longestWord(aPhrase) {
    var becomeAnArray = aPhrase.split(" ");
    var longest = 0;
    var word = "";
    for (var i = 0; i < aPhrase.length; i++) {
        if (longest < aPhrase[i].length) {
            longest = aPhrase[i].length;
            word = aPhrase[i];
        }
    }
    return word;
}

//Defining a function that takes a phrase, and returns the same phrase with every word capitalized
function everyWordCapitalized(aPhrase) {
    var becomeAnArray = aPhrase.split(" ");
    
    for (var i=0; i<becomeAnArray.length; i++){
        var firstChar = becomeAnArray[i].charAt(0);
        var rest = becomeAnArray[i].substring(1);
        
        
        
        firstChar = firstChar.toUpperCase();
        rest = rest.toLowerCase();
        becomeAnArray[i] = firstChar + rest;
       
   }
    
    return becomeAnArray.join(" ");
}


