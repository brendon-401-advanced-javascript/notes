
// function Request(obj) {
//     this.command = obj;
// }

class Request {
    constructor(obj) {
        this.command = obj; 
    }
}

Request.prototype.go = function () {
    return `Note: ${this.command.note}`;
}

module.exports = Request;
