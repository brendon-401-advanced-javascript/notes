
class Request {
    constructor(obj) {
        this.command = obj;
    }
    go() {
        return `Note:${this.command.add}`;
    }
}

module.exports = Request;



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


// let x = $$.map(Input, (idx,val) => val.toUpperCase());
// console.log(x);

