/*1. Write a function, which receives an array as an argument which elements arrays of numbers. 
Find biggest negative number of each array. Return product of that numbers.If there is not any negative number 
in an array, ignore that one. Check that items of the given array are arrays.*/

function product(mainArr){

    if(mainArr.some(item => Array.isArray(item) === false)){
        return 'Invalid Argument';
    }
    let itemArr = mainArr.map(item => item.filter(elem => elem < 0).sort(function(a, b) {
        return a - b;
    }));
    let newArr = itemArr.filter(item => item.length > 0);
    if(newArr.length === 0){
        return 'No negatives';
    }
    let product =  newArr.reduce((count, value)=> {
        return count * value[value.length - 1];
    },1);
    return product;
}
console.log(product([[2, -9, -3, 0], [1, 2], [-4 , -11, 0]]));
console.log(product([[3, 4], [11, 0], [5, 6, 7, 8]]));
console.log(product([1, 2, 3]));


//2. Given an array of strings and numbers. Print the number of integers and the number of strings in the array.

function filter(arr) {
    var numbers = 0;
    var strings = 0;
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "number") {
        ++numbers;  
      }
      if (typeof arr[i] === "string") {
        ++strings;
      }
    }
    return `Numbers: ${numbers}, Strings: ${strings}`;
  }
  console.log(filter([1, '10', 'hi', 2, 3]));
  console.log(filter([1, 4, 'i am a string', '456']));

  
  //3. Given an array consisting from the arrays of numbers (like a two-dimensional array). Find sum of each row and print them as an array.

  function sum(mainArr) {
    let itemArr = mainArr.map(item => item.reduce((total, item) => total + item));
    return itemArr;
  }
  console.log(sum([[3, 4, 5], [1, 0, 0], [4, 5, 4], [8, 8, -1]]));
  console.log(sum([[ 8, 35, 2], [8], [5, 6, -5 , -6], [1, 3, -9, 0, -1]]));
  console.log(sum([[1], [2], [3], [4]]));


/*4. Given an array of integers. Write a function that return new array from first array, where  
removed even numbers, and odd numbers was multiplied with new array length*/

function newArr(arr) {
    let filtered = arr.filter(elem => elem % 2 !== 0);
    let createArr = filtered.map(item => item * filtered.length);
    return createArr;
    
  }
  console.log(newArr([5, 4, 78, 0, -3, 7]));
  console.log(newArr([2, 4, 6, 88]));
  console.log(newArr([]));


//5. Given an array of numbers. Create an array containing only elements once.

function newArr(arr){
    let createArr = arr.filter((item,index) => arr.indexOf(item) === index);
    return createArr;
}
console.log(newArr([1, 2, 3, 3, 2, 5]));
console.log(newArr([4, 4]));


//6. Given an array. Create the array which elements are products between two neighbours.

function newArr(arr) {
    let createArr = arr.map((item, index) => item * arr[index + 1]);
    let answer = createArr.slice(0, createArr.length - 1);
    return answer;
  }
  console.log(newArr([3, 7, 12, 5, 20, 0]));
  console.log(newArr([1, 1, 4, 32, 6]));

//7. Given an object. Invert it (keys become values and values become keys). If there is more than key for that given value create an array.

function invert(obj) {
    let newObj = {};
    let arr = [];
    for(let key in obj) {
        if(newObj.hasOwnProperty(obj[key])){
            if(!Array.isArray(newObj[obj[key]])) {
                newObj[obj[key]] = [newObj[obj[key]]]
            }
            newObj[obj[key]].push(key)
        }
        else newObj[obj[key]] = key;
    }


    return newObj;
}
console.log(invert({ a: '1', b: '2' }));
console.log(invert({ a: '1', b: '2', c: '2'  }));
console.log(invert({ a: '1', b: '2', c: '2', d: '2'  }));


//8. Given an object. Write a function that creates a deep copy of it.

var a = { a: '1', b: { a: 2} };
var b = {};
for (let prop in a) {
  b[prop] = a[prop];
}
a.b.a = 123;
console.log(b.b.a !== 123);


function deepCopy(obj) {
  const newObj = {};
  const keys = Object.keys(obj);
  for (const key of keys) {
    const val = obj[key];
  }
  if (typeof val === 'object' && val) {
    newObj[key] = deepCopy(val);
  } else {
    newObj[key] = val;
  }
  return newObj;
}
console.log(deepCopy({ a: '1', b: { a: 2} }));
a.b.a = 123;
console.log(b.b.a !== 123);







