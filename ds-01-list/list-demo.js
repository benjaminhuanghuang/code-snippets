list = [];

/*
 add / remove element at the end
*/
list.push("1");
console.log(list);

list.pop();
console.log(list);

/*
 add /remove element at the beginning
 */
list.unshift("6");
console.log(list);

list.shift();
console.log(list);

/* 
  insert / remove / update 
  The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements
*/
const months = ["1", "2", "3", "4"];
months.splice(1, 0, "Feb");
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// replaces 1 element at index 4
console.log(months);

/*
  拼接
*/
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);

console.log(array3);
/* 
  Slice( start, [end])  not including end
  method returns a shallow copy of a portion of an array into a new array object
*/
const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4)); // 2, 3
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

let s = animals.slice(2, 10000);
s[1] = 10000;
console.log(s);
console.log(animals); // ！对slice的操作没有影响原来的list！

/*
-- join
*/
let fruits = ["Banana", "Orange", "Apple", "Mango", 1, 2, 3, 4];
let energy = fruits.join(); //   The default separator is comma (,)
console.log(energy);
//-- Inverse operation of join
fruits = energy.split(",");
console.log(fruits);



/*  
  find() return value or undefined
  findIndex() return index or -1
*/
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// expected output: 3


/*
  max / min
*/
const array1 = [1, 3, 2];

console.log(Math.max(...array1));

