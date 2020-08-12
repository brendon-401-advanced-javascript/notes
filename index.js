'use strict';
// require dependancies and connect files
const input = require('./lib/input.js');
const request = require('./lib/notes.js');

// take input
let command = input();

// push output
const output = request(command);
console.log(output);
 

