//1. 
    //a. Print all number between 1 and 10.

    for (var i = 1; i <= 10; i++) {
        console.log(i);
    }

    //b. Print all number between 1 and 10 except 6.

    for (var i = 1; i <= 10; i++) {
        if (i !== 6) {
            console.log(i);
        } 
    }

    //c. Print all even number between 1 and 10.
 
    for (var i = 1; i <= 10; i++) {
        if (i % 2 ===0) {
            console.log(i);
        }
    }

    //d. Calculate sum of all numbers between 1 and 10 (using loop).

    var a = 0;
    for (var i = 1; i <= 10; i++) {
        a += i;
    }
    console.log(a);


    //e. Calculate sum of all numbers between 1 and 10 except 8.

    var a = 0;
    for (var i = 1; i <= 10; i++) {
        if (i !== 8) {
            a += i;
        }
    }
    console.log(a);


    //f. Calculate sum of all odd numbers between 1 and 10.

    var a = 0;
    for (var i = 1; i <= 10; i++) {
        if (i % 2 === 1) {
            a += 1;
        }
    }
    console.log(a);

    //g. Calculate sum of squares of all numbers between 1 and 10.

    var a = 0;
    for (var i = 1; i <= 10; i++) {
        a += i ** 2;
    }
    console.log(a);


//2. Insert a digit and a number. Check whether the digits contains in the number or not.(don`t use string)

function check (digit, number) {
    while (number > 0) {
      if (number % 10 === digit) {
        return "Yes";
      }
      number = (number - number % 10) / 10;
    }
    return "No";
  }
  console.log(check (5, 2463));
  console.log(check (4, 6));
  console.log(check (8, 45689));


3. Enter a number. Reverse its first and last digits. Print the new number.

function reverse(number) {
    let n = number;
    let c = number;
    let last = n % 10;
    let first;
    let i = 0;
    
    while (c > 9) {
    c = (c - c % 10) / 10;
    first = c;
    ++i;
    }
    let remain = ((n - last) % (10 ** i)) / 10;
    let answer = `${last}${remain}${first}`;
        return answer;
  }
  console.log(reverse(4569753));


4. Enter a number. Find the difference between its biggest and smallest digits.


5. Insert a number. Print ‘yes’ if the number is prime, ‘no’ otherwise.


6. Given a number n ( n > 0 ). Print Fibonacci series up to n.



7. Write a recursive function to determine whether all digits of the number are odd or not.



8. Write a function that accepts a string(a sentence) as a parameter and finds the longest word within the string․ If there are several words which are the longest ones, print the last word(words can be separated by space, comma or hyphen).


9. Write a function to find longest substring in a given a string without repeating characters except space character. 
If there are several, return the last one. Consider that all letters are lowercase.



10. Write a function, which receives two numbers as arguments and finds all numbers between them such that each digit of the number is even. The numbers obtained should be printed in a comma-separated sequence on a single line.
