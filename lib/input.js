'use strict';

const minimist = require("minimist");


class Input {
    constructor() {
        const arg = minimist(process.argv.slice(2));
        this.note = this.note(arg);
        this.category = this.category(arg);
        this.action = this.action(arg);
    }


    action(arg = {}) {
        if(arg.list || arg.l) {return 'list';}
        else if(arg.add || arg.a) {return 'add';}
        // add delete func
        else if(arg.delete || arg.d) {return 'delete';}
        else {return 'Enter a command';}
    }
    note(arg = {}) {
        if(arg.list || arg.l) {return 'Notes list';}
        else if(arg.add || arg.a) {return `${arg.add}`;}
        else {return 'Enter a command';}
    }
    category(arg = {}) {
        if(arg.category) {return arg.category; }
        else if (arg.c) {return arg.c; }
        else {return 'misc'; }
    }
   
    
    
}


module.exports = Input;
