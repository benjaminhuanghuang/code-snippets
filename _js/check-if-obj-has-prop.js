
/*
hasOwnProperty

The hasOwnProperty() method returns a boolean indicating whether the object has the specified property 
as its own property (as opposed to inheriting it).
*/

const object1 = {};
object1.property1 = 42;

console.log(object1.hasOwnProperty('property1'));
// expected output: true

console.log(object1.hasOwnProperty('toString'));   
// expected output: false, it is inherited

console.log(object1.hasOwnProperty('hasOwnProperty'));
// expected output: false


/*
 in operator

*/
const hero = {
  name: 'Batman'
};

'name' in hero;     // => true
'realName' in hero; // => false


/*
Comparing with undefined
*/
const hero = {
  name: 'Batman'
};

hero.name !== undefined;     // => true
hero.realName !== undefined; // => false