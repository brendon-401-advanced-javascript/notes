'use strict';

const minimist = require("minimist");


class Input {
    constructor() {
        const arg = minimist(process.argv.slice(2));
        this.note = this.note(arg);
        this.command = this.command(arg);
        this.category = this.category(arg);
        this.name = this.name(arg);
    }
    
    command(arg = {}) {
        if(arg.list || arg.l) {return 'Notes list';}
        else if(arg.add || arg.a) {return `Note added:${arg.name}`;}
        else {return 'Enter a command';}
    }
    note(arg = {}) {
        if(arg.note) {return arg.note; }
        else if (arg.n) {return arg.n; }
        else {return 'Undefined' }
    }
    category(arg = {}) {
        if(arg.category) {return arg.category; }
        else if (arg.c) {return arg.c; }
        else {return 'misc'; }
    }
    name(arg = {}) {
        if(arg.name) {return arg.name; }
        else if (arg.n) {return arg.n; }
        else {return 'undefined'; }
    }
    
    
}



module.exports = Input;
