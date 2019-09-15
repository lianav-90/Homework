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
  console.log(reverse(2));
  console.log(reverse(13));
  console.log(reverse(895796));


4. Enter a number. Find the difference between its biggest and smallest digits.

function minmax (a) {
    let num = a;
    let large = 0;
    let small = 10;
    let digit;
    
    if(num == 0) {
        small = 0;
    }   else {
            while(num > 0) {
                digit = num % 10;
                num = num - digit;
                
                if (digit > large) {
                    large = digit;
                } else if (digit < small) {
                    small = digit;
                } else if (digit == 0) {
                    small = 0;
                }
                num /= 10;
            }
        }
    let difference = large - small;
    return difference;
}
console.log(minmax(5));
console.log(minmax(152));
console.log(minmax(4593653));

//5. Insert a number. Print ‘yes’ if the number is prime, ‘no’ otherwise.

function isPrime(num) {
    for (var i = 2; i < num; i++)
      if (num % i === 0) return "no";
          return "yes";
}
console.log(isPrime(401));
console.log(isPrime(63));


//6. Given a number n ( n > 0 ). Print Fibonacci series up to n.

function fibonacci (n) {
    let result = "0, 1";
    let a = 0, b = 1, sum = 0;
    
    for(let i = 2; i <= n; i++) {
      sum = a + b;
      if (sum < n) { 
        result += ', ' + sum;
      }
      a = b;
      b = sum;
    }
     return result;
    }
    console.log(fibonacci(7));
    console.log(fibonacci(45));



//7. Write a recursive function to determine whether all digits of the number are odd or not.

function isOdd(num) {
    if (num === 0) {
      return false;
    } else if (num > 0 && num <= 9) {
      if (num % 2 === 1) {
        return true;
      } else {
        return false;
      }
    } else {
        var digit = num % 10;
        if (digit % 2 === 1) {
          return isOdd((num - digit) / 10);
        } else {
          return false;
        }
    }
  }
  console.log(isOdd(4211133));
  console.log(isOdd(7791));
  console.log(isOdd(5));



/*8. Write a function that accepts a string(a sentence) as a parameter and finds the longest word within the string․ 
If there are several words which are the longest ones, print the last word(words can be separated by space, comma or hyphen).*/

function longestWord(string) {
    let str = string. split(" ");
    let longest = 0;
    let word;
    str.forEach(function(str) {
        if (longest < str.length) {
            longest = str.length;
            word = str;
        }
    });
    return word;
}
console.log(longestWord("A revolution without dancing is a revolution not worth having."));
console.log(longestWord("Which would be worse - to live as a monster, or to die as a good man?"));

/*9. Write a function to find longest substring in a given a string without repeating characters except space character. 
If there are several, return the last one. Consider that all letters are lowercase.*/

function substring(str) {
    for (let i = 0; i < str.length; i++) {
        if (str.includes(str[i])) {
            str.slice(i, 1);
        }
         return str;
    }      
}
console.log(substring("there are no two words in the english language more harmful than 'good job'."));
console.log(substring("parting your soup is not a miracle, bruce."));



/*10. Write a function, which receives two numbers as arguments and finds all numbers between them such 
that each digit of the number is even. The numbers obtained should be printed in a comma-separated sequence on a single line.*/

function isEven (num1, num2) {
    for (let i = num1; i <= num2; i++) {
        var num = i;
        digit = num % 10;
        num = (num - digit) / 10;
        if (digit % 2 === 0) {
            return num;
        } else {
            return "Such numbers does not exist.";
        }
    }
}
console.log(isEven(19, 42));
console.log(isEven(99, 199));

// I know that 9 and 10 are incorrect, I write what I could.

