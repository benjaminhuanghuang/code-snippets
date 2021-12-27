const set = new Set();

set.add('a');


if(set.has('a')){


}

set.delete('a');

/* Crete  --------------------------------------------------
If an iterable object is passed, all of its elements will be added to the new Set.
-------------------------------------------------------------*/

let codonStopSet = new Set(["UAA", "UAG", "UGA"]);
codonStopSet.has('UAA');

/* Interation  --------------------------------------------------
for ... of
keys() - Returns an iterable for keys
values() - Returns an iterable for values
entries() - Returns an iterable of key,value
由于Set结构没有键名，只有键值（或者说键名和键值是同一个值），所以keys方法和values方法的行为完全一致。

.forEach
-------------------------------------------------------------*/

// value1 is the same of value2 
function logSetElements(value1, value2, set) {
  console.log(`s[${value1}] = ${value2}`);
}

new Set(['foo', 'bar', undefined]).forEach(logSetElements);


// unique array
const mySet = new Set([1, 2, 3, 4, 4])
const unicArray = [...mySet] // [1, 2, 3, 4]

// Union
let a = new Set([1, 2, 3])
let b = new Set([4, 3, 2])
let union = new Set([...a, ...b]) // {1, 2, 3, 4}

// intersect
let a = new Set([1, 2, 3])
let b = new Set([4, 3, 2])
let intersect = new Set([...a].filter(x => b.has(x)))  // {2, 3} 利用数组的filter方法

// diff 
let a = new Set([1, 2, 3])
let b = new Set([4, 3, 2])
let difference = new Set([...a].filter(x => !b.has(x))) //  {1} 
