import {
    formNoteTitleEl,
    formNoteContentEl,
    notesListUlEL,
    buttonEditEl,
    buttonSaveEl,
    buttonDeleteEl
} from './dom.js'

export let notesArr = [];

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

export const blinkInfo = _ => {
        buttonEditEl.classList.add("edit-note-saved");
        buttonEditEl.innerHTML = "Changes saved"
        setTimeout(_ => {
            buttonEditEl.classList.remove("edit-note-saved");
            buttonEditEl.innerHTML = "Save changes to current"
        }, 2000)
}

const noteContentPreview = (noteIndex) => {
    let preview = [];
    let number = 20;
    for (let i = 0; i < number; i++) {
        preview.push(notesArr[noteIndex]['content'][i])
    }
    return preview.join('') + '...';
}

export const highlightActiveNote = noteIndex => {
    let allNotes = [...document.querySelectorAll('.notes-list-element')];
    allNotes.forEach(elem => {
        elem.style.backgroundColor = ''
    })
    allNotes[noteIndex].style.backgroundColor = 'slategrey'
}

export const addCurrentNoteToHTMLList = (noteIndex) => {
    let markup =
        `<li class="notes-list-element">
    <p class="notes-list-note-title note-li-p">${notesArr[noteIndex]['title']}</p>
    <p class="notes-list-note-content note-li-p">${noteContentPreview(noteIndex)}</p>
    </li>`;
    notesListUlEL.innerHTML += markup;
}

export const addNote = (title, content) => {
    let note = new Note(title, content);
    note.pushNote();
    addCurrentNoteToHTMLList(notesArr.length - 1);
}

export const showNoteToEdit = (noteIndex) => {
    formNoteTitleEl.value = notesArr[noteIndex].title;
    formNoteContentEl.value = notesArr[noteIndex].content;
    buttonEditEl.classList.remove("hidden");
    buttonDeleteEl.classList.remove("hidden");
}

export const editCurrentNoteInArray = noteIndex => {
    if (notesArr[noteIndex]) {
        notesArr[noteIndex].title = formNoteTitleEl.value;
        notesArr[noteIndex].content = formNoteContentEl.value;
    } else {
        alert('Choose a note to edit')
    }
}

export const deleteCurrentNoteInArray = noteIndex => {
    if (notesArr[noteIndex]) {
    notesArr.splice(noteIndex, 1);}
    else {alert ('Choose a note to delete')}

}

export const updateHTMLList = noteIndex => {
    let markup = '';
    let partialMarkup = '';
    notesArr.forEach(note => {
        partialMarkup =
            `<li class="notes-list-element">
    <p class="notes-list-note-title note-li-p">${note['title']}</p>
    <p class="notes-list-note-content note-li-p">${noteContentPreview(notesArr.indexOf(note))}</p>
    </li>`;


        //     partialMarkup =
        //     `<li class="notes-list-element">
        // <p class="notes-list-note-title note-li-p">${note['title']}</p>
        // <p class="notes-list-note-content note-li-p">${note['content']}</p>
        // </li>`;
        markup += partialMarkup;
    })
    // console.log(markup);
    notesListUlEL.innerHTML = markup;
};

export const loadFile = _ => {
    fetch('./notes/notes.txt')
        .then(response => response.json())
        .then(loadedArray => {
            notesArr = loadedArray;
            updateHTMLList();
        });
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