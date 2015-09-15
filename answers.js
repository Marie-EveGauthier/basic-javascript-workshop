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

//Defining a function that takes an array and returns the largest number of the array
function largestOfArray(myArray) {
        
    return Math.max.apply(Math, myArray);
}

//or

function maxOfArray(myArray) {
    var largest = 0;
    
        for (var i = 0; i < myArray.length; i++){
            if (largest < myArray[i]) {
                largest = myArray[i];
                
            }
        }
    return largest;
    
}

//Defining a function that takes an array, and returns a filtered array that should only contain the truthy values from the initial array
//It doesn't work with string in the array and I don't know why...


function TruthyValue(myArray){
    var mynums = [];
    for (var i=0; i<myArray.length; i++){
        if ((myArray[i] > 0) && (myArray[i] !== null)){
           mynums.push(myArray[i]); 
        }
    }
    return mynums;
}


// Defining a function that returns the sum of all the numbers in the array
function sum(myArray) {
    var mytotal = 0;
    for(var i = 0; i<myArray.length; i++){
        mytotal += myArray[i];
    }
    
   return mytotal;
}

//Defining a a function that takes two arrays, and returns an array of all elements that are only in one array
function uniqueArray(arr1, arr2){
    var result =[];
    
    for(var i = 0; i<arr1.length; i++){
        if(arr2.indexOf(arr1[i]) === -1){ 
            result.push(arr1[i]);
        }
   }
    for(var i = 0; i<arr2.length; i++){
        if(arr1.indexOf(arr2[i]) === -1){
           result.push(arr2[i]);
        }
    }
    return result;
}

//Defining a function that returns a new array that maps every element of the input array by passing it through the function received
function fnMapsArr(myArray, myFunction){
    var newArray =[];
    for(var i = 0; i<myArray.length; i++){
        var newInput = myFunction(myArray[i]);
        newArray.push(newInput);
    }
    return newArray;
        
}