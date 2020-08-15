'use strict';

const minimist = require("minimist");
const arg = minimist(process.argv.slice(2));


class Input {
    constructor() {
        this.add = arg.add || arg.newnote || arg.a || {};
        this.delete = arg.delete || arg.d;
    }
    add(arg = {}) {
        if(arg.add) {return arg.add; }
        else if (arg.a) {return arg.a; }
        else {return undefined; }
    }
    
}



module.exports = Input;

// const $$ = module.exports = {};

// $$.map = (input, callback) => {
//     if (typeof input !== 'object') { return ; }
//     let type = Array.isArray(input) ? 'array' : 'object';

//     if (type === 'array') {
//         let newThing = [];
//         input.forEach((val, idx) => {
//             newThing.push(callback(val, idx));
//         })
//         return newThing;
//     }
//     else {
//         let newThing = {};
//         for (let key in input) {
//             let value = input[key];
//             newThing[key] = callback(key, value);
//             // console.log(key);
//         }
//         return newThing
//     }
// }
// class Input {
//     constructor() {
//         this.note = arg.add || arg.newnote || arg.a || {};
//     }
//     add(arg = {}) {
//                 if(arg.add) {return arg.add; }
//                 else if (arg.a) {return arg.a; }
//                 else {return undefined; }
//             }
// }

// let x = $$.map(Input, (idx,val) => val.toUpperCase());
// console.log(x);

// module.exports = Input;