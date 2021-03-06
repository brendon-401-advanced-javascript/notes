'use strict'; 
const mongoose = require('mongoose');

const note = mongoose.Schema({
    note: {type: String, required: true},
    category: {type: String, required: true, enum: ['work', 'school', 'home', 'misc']}
});

module.exports = mongoose.model('notes',note);