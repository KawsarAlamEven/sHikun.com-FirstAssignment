//Solve 1. calculate the area of a triangle
let height = 8;
let base = 3;
let area = (height*base)/2;

console.log(area);




//Solve 2. convert degrees to radians
let degrees = deg =>
(deg * Math.PI) / 180.0;
console.log(degrees(90.0));




//Solve 3.calculateFactorial that takes a number and returns its factorial.
var cal =1;
for (let x=1; x <= 8; x++){
    cal *= x;
}
console.log(cal);



//Solve 4.isPrime that takes a number as a parameter and returns true if it's a prime number, and false otherwise.
var num = prompt("please enter a number");
if (num == 1){
console.log(`${num} is a other prime number`);
}else if(num < 1){
console.log(`${num} is a not prime number`);
}else{
for(var i = 2; i<num; i++){
    if(num%i ==0){
    var x=(`${num} is a not prime number`);
    break;
    }else{
    var x=(`${num} is a prime number`);
    }
 }
}
console.log(x);



//Solve 5.mergeArrays that takes two arrays as parameters and returns a new array that merges both arrays
const array1 = ['Kawsar',"Alam","Even"];
const array2 = ["Shihab","Rajin"];

const result = [...array1, ...array2];
console.log(result);



//Solve 6.isLeapYear that takes a year as a parameter and returns "This is a leap year" if it's a leap year, and "Not Leap year" otherwise.
function isLeapYear(year) {
    if(year % 400 === 0|| (year % 4 === 0) && (year % 100 !== 0) ) {
       console.log(`${year} is a leap year`);
    }else{
        console.log(`${year} is not a leap year`);
  }
}
isLeapYear(2024);



//Solve 7.removeDuplicates that takes an array and returns a new array with duplicates removed.
let array = [7, 4, 7, 8, 7, 9, 2 , 7, 3, 4, 4, 11, 10, 5, 1, 1];
let unique = new Set(array);
console.log(unique);



//Solve 8.convertToCelsius that takes a temperature in Fahrenheit and returns the equivalent temperature in Celsius



//Solve 9.to find the maximum of five numbers.
let numbers = [1, 2, 3, 5, 6];

let max = Math.max(...numbers);
console.log(max);


//Solve 10.evenOdd() that takes a string as a parameter. Now you have to give the output based on the total number of characters in your String. The output will be 'even' or 'odd'. [ Input: ‘JavaScript’ Output: even, Input: ‘Hello’ Output: odd]





Answer any 4 questions.
Answer-1. Explain the difference between 'if...else' and 'switch' statements for conditional logic.
if...else::
if statement to specify a block of JavaScript code to be executed if a condition is true. And else statement to specify a block of code to be executed if the condition is false.

switch::
switch statement to select one of many code blocks to be executed.and use specify many alternative blocks of code to be executed



Answer-2. What is JavaScript, and what is its primary purpose in web development?
JavaScript is a scripting or programming language that allows you to implement complex features on web pages

JavaScript developed in Netscape, JS allows developers to create a dynamic and interactive web page to interact with visitors and execute complex actions. It also enables users to load content into a document without reloading the entire page.



Answer-3.Explain the difference between var, let, and const when declaring variables in JavaScript.
const variables use if the value should not be changed and the type should not be changed (Arrays and Objects)

let variables use when variable total is declared. if you can't use const then you can use let variables

var variables was used in all JavaScript code from 1995 to 2015.it should only be used in code written for older browsers.




Answer-5 What is the difference between "null" and "undefined" in JavaScript?
Null :
Null is an assigned value. It means nothing.
 
Undefined :
Undefined means a variable has been declared but not defined yet.
