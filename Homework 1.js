/* 1. What are the outputs of these expressions: '7' + 1 + 5 and 1 + 5 + '7' ?


a. '76', '157'
b. 715, 157
c. '715', ‘67’
d. '76', ‘67’ */

The right answer is c, because the concatenation is being done from left to right and the result is String.



/* 2. Swap 2 variables.
a. With third variable
b. With arithmetic operators */

var a = 5;
var b = 7;
var c = a;
a = b;
b = c;
console.log(a);
console.log(b);

var a = 5; 
var b = 7;
a = a + b;
b = a - b;
a = a - b;
console.log(a);
console.log(b);


// 3. Check whether a given number is negative. Print “yes”, if it is negative, print “no” otherwise

var a = 3;
console.log(a < 0 && "yes" || "no");


// 4. Given two numbers print 1 if one of them is divisible by the other one, otherwise print 0.

var a = 5;
var b = 20;
console.log(!(a % b && b % a) && 1 || 0);


// 5. Given three numbers. Find the maximum one

var a = 4;
var b = 2;
var c = 7;
console.log((a > b && a > c && `${a}` || (b > c && `${b}`) || `${c});


// 6. Given string ‘test’. Use variables and string methods and print ‘tetsetesesesesteest’

var str = 'test';
console.log(str.slice(0, 2) + str.split('').reverse().join('') + str.slice(1, 3).repeat(4) + str.slice(0, 2) + str.substr(1, 3));
