'use strict';

const minimist = require("minimist");

function getInput() {
    const arg = minimist(process.argv.slice(2));
    return parseNote(arg);
}


function parseNote(obj) {
    return {
        note: obj.add || obj.newnote || obj.a,
    }
}

module.exports = getInput;