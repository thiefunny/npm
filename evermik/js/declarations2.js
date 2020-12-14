import {
    formNoteTitleEl,
    formNoteContentEl,
    notesListUlEL,
    buttonEditEl
} from './dom.js'

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

export const clearForm = (...formEls) => {
    for (let elem of formEls) {
        elem.value = null
    }
}

export const addCurrentNoteToHTMLList = (noteIndex) => {
    let markup =
        `<li class="notes-list-element">
    <p class="notes-list-note-title note-li-p">${notesArr[noteIndex]['title']}</p>
    <p class="notes-list-note-content note-li-p">${notesArr[noteIndex]['content']}</p>
    </li>`;
    notesListUlEL.innerHTML += markup;
}



export const addNote = (title, content) => {
    let note = new Note(title, content);
    note.pushNote();
    addCurrentNoteToHTMLList(notesArr.length - 1);
}

export const updateCurrentNoteInHTMLList = noteIndex => {
    let markup = '';
    let partialMarkup = '';
    notesArr.forEach(note => {
        partialMarkup =
            `<li class="notes-list-element">
    <p class="notes-list-note-title note-li-p">${note['title']}</p>
    <p class="notes-list-note-content note-li-p">${note['content']}</p>
    </li>`;
        markup += partialMarkup;
    })
    // console.log(markup);
    notesListUlEL.innerHTML = markup;
};

export const showNoteToEdit = (noteIndex) => {
        formNoteTitleEl.value = notesArr[noteIndex].title;
        formNoteContentEl.value = notesArr[noteIndex].content;
        buttonEditEl.classList.remove("hidden");
    }











export const saveFile = (filename, text) => {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'block';
    element.style.background = 'red';
    element.style.width = '100px';
    element.style.height = '100px';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}


