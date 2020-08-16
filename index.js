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
// insert record

// query the DB

// take input
let input = new Input();
const request = new Request(input);

// push output

const outputAdd = request.add();
const outputList = request.list();


// handle the newNotes with Database
let newNotes = {
    name: request.name,
    note: request.note,
    category: request.category
}
// console.log(request.note);

async function handleTheNotes() {

    let note = new Entry(newNotes);
    let addedNote = await note.save();
    console.log('added', addedNote);

    let allNotes = await Entry.find({});
    console.log('all notes', allNotes);
}

handleTheNotes();

// save new note into database
// let note = new Entry(newNotes);
// note.save()
//     .then(newNote => {
//         console.log(newNote);
//     })

// let allNotes = Entry.find({})
//     .then(notes => {
//         console.log(notes);
//     })




