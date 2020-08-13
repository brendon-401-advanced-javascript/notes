'use strict';

const minimist = require("minimist");
const arg = minimist(process.argv.slice(2));

class Input {
    constructor() {
        this.note = arg.add || arg.newnote || arg.a || {};
    }
}

Input.prototype.add = function (arg = {}) {
    if(arg.add) {return arg.add; }
    else if (arg.a) {return arg.a; }
    else {return undefined; }
}


module.exports = Input;