/*
  How to Check if Object is Empty in JavaScript
  https://medium.com/@samanthaming/how-to-check-if-object-is-empty-in-javascript-aeab2674eeb1
*/

const empty = {};
/* -------------------------
  Plain JS for Newer Browser
----------------------------*/
Object.keys(empty).length === 0 && empty.constructor === Object    // true


/* -------------------------
  Lodash for Older Browser
----------------------------*/
_.isEmpty(empty)
// true