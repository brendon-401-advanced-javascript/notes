'use strict';
// require dependancies and connect files
const Input = require('./lib/input.js');
const Request = require('./lib/notes.js');


// // connect to mongo





// take input
let input = new Input();
const request = new Request(input);
request.execute();
console.log(typeof(input));

// handle the newNotes with Database

// console.log(request.note);





// addANote();
// console.log(input);
// listNotes();





