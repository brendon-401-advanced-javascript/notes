'use strict'; 
const mongoose = require('mongoose');

const note = mongoose.Schema({
    name: { type: String, required: true },
    note: {type: String, required: true},
    category: {type: String, required: true}
});

module.exports = mongoose.model('notes',note);