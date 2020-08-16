'use strict';

const minimist = require("minimist");


class Input {
    constructor() {
        const arg = minimist(process.argv.slice(2));
        this.note = this.add(arg);
        this.command = this.command(arg);
        this.category = this.category(arg);
    }
    add(arg = {}) {
        if(arg.add) {return arg.add; }
        else if (arg.a) {return arg.a; }
        else {return undefined; }
    }
    command(arg = {}) {
        if(arg.list || arg.l) {return 'list'; }
        else if(arg.add || arg.a) {return 'add';}
        else if(arg.category || arg.c) {return 'category';}
    }
    category(arg = {}) {
        if(arg.category) {return arg.category; }
        else if (arg.c) {return arg.c; }
        else {return undefined; }
    }
    
    
}



module.exports = Input;
