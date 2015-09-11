// defining a function that returns the first character of the argument
function firstCharacter (str) {
	return str[0];
}

// defining a function that returns the last character of the argument
function lastCharacter (str) {
    return str[str.length - 1];
}

// Defining a function that returns the character at the position represented by the number.
function GiveACharacter (str, num) {
    if (num >=0) {
        return str[num];
    }
}

//Defining a function that takes two numbers and adds them together
// If I pass something other than a number to the function, it will return both argument writing together. 
function addition (num1, num2) {
    return num1 + num2;
}

//Defining a function that takes two numbers and multiplies them together
// If I pass something other than a number to the function, it will return NaN (Not a Number)
function multiplication (num1, num2) {
    return num1 * num2;
}


/*Defining a function that takes two numbers and a string.
It's the string that tells which arithmetic operators we have to use with the two numbers. 
If there is no string, it returns "0".*/
function stringTellsWhatToDo (num1, num2, str) {
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

// Defining a function that takes a string and a number, and returns the string repeated that many number of times


var stringRepeated = function(theString, num) {

        var count = 0;
        var result = "";
    
    while (count < num){
        result = result + theString;
        count ++;
    }
return result;
}
