'use strict';
// require dependancies and connect files
const Input = require('./lib/input.js');
const Request = require('./lib/notes.js');
const mongoose = require('mongoose');
const Entry = require('./lib/model/notes-schema.js');

// // connect to mongo
const MONGODB_URI = 'mongodb://localhost:27017/notesey';
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});




// take input
let input = new Input();
const request = new Request(input);

// handle the newNotes with Database
let newNotes = {
    name: request.name,
    note: request.note,
    category: request.category
}
// console.log(request.note);

async function addANote() {
    try {
    let note = new Entry(newNotes);
    let addedNote = await note.save();
    console.log(`Note added: ${request.add()} `);
    console.log(`${addedNote}`)

   
    } catch(e) {
        console.error(e);
    }
}

async function listNotes() {
    try {
    let allNotes = await Entry.find({});
    console.log('all notes', allNotes);
    } catch(e) {
        console.error(e);
    }
}

// addANote();

listNotes();





