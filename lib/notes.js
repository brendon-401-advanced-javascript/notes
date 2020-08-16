
class Request {
    constructor(note) {
        this.name = note.name;
        this.note = note.note;
        this.category = note.category; 
    }
    add() {
        return `Name:${this.name}, Note:${this.note}, Category:${this.category}`;
    }
    list(){
        
    }
}

module.exports = Request;

