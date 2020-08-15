'use strict';
// require dependancies and connect files
const Input = require('./lib/input.js');
const Request = require('./lib/notes.js');

// take input
let input = new Input();

const request = new Request(input);

// push output
const output = request.go();
console.log(output);


