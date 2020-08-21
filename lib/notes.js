
const mongoose = require('mongoose');
const Entry = require('./model/notes-schema.js');

const MONGODB_URI = 'mongodb://localhost:27017/notesey';
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

class Request {
    constructor(note) {
        this.note = note.note;
        this.category = note.category;
        this.action = note.action; 
    }
    execute(){
        // add delete case
     switch(this.action) {
        case 'add':
        case 'a':
        this.addANote() 
        break;
        case 'list':
        case 'l':
        this.listNotes()
        break;
        default :
        break;
        case 'delete' :
        case 'd' :
        this.delete()
        break;
     }
    }

    async addANote() {
        try {
        let note = new Entry({note:this.note, category:this.category});
        let addedNote = await note.save();
        console.log(`Added note: ${addedNote.note} to Database`);
    
       
        } catch(e) {
            console.error(e);
        }
    }
    
    async listNotes() {
        try {
        let allNotes = await Entry.find({});
        console.log('all notes', allNotes);
        } catch(e) {
            console.error(e);
        }
    }
    //add delete async func
    async delete() {
        try {

        }
        catch(e) {
            console.error(e);
        }
    }
}
module.exports = Request;

