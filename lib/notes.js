
class Request {
    constructor(obj) {
        this.command = obj;
    }
    go() {
        return `Note: ${this.command.note}`;
    }
}

module.exports = Request;
