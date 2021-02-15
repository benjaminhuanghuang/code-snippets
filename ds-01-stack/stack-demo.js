/*


*/

let stack = [];


//-- push
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack); // [1,2,3]

//-- pop
console.log(stack.pop()); //  3
console.log(stack); // [1,2];


//- peek
var top = stack[stack.length-1];

//-- empty
console.log(stack.length == 0)
