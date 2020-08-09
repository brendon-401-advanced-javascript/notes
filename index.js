'use strict';
// require dependancies
const minimist = require('minimist');

// take input
const arg = minimist(process.argv.slice(2));

// push output
const output = runNote(arg);

// give output
console.log(output);

// command function
 function parseNote(obj) {
     return {
         note: obj.add || obj.newnote || obj.a,
     }
 }

 function runNote(obj) {
     const command = parseNote(obj);
     return `Note: ${command.note}`;
 }
