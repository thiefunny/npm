export const notesArr = [];

export class Note {
    constructor(title, content) {
        this.title = title;
        this.content = content;
        this.time = new Date;
    }
    pushNote() {
        notesArr.push(this)
    }
}

// export const pushNote = (note) => {
//     notesArr.push(note);
// }

export const clearForm = (...formEls) => {
    for (let elem of formEls) {
        elem.value = null
    }
}