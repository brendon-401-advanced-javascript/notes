'use strict';
// require dependancies and connect files
const Input = require('./lib/input.js');
const Request = require('./lib/notes.js');
const mongoose = require('mongoose');
const notesDB = require('./lib/model/notes-schema.js');

// // connect to mongo
const MONGODB_URI = 'mongodb://localhost:27017/notesey';
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
// insert record

// query the DB

// take input
let input = new Input();

const request = new Request(input);

// push output
console.log(input.command);
const outputAdd = request;

console.log(outputAdd);


