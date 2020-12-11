import {
    notesArr,
    Note,
    // pushNote,
    clearForm
} from './declarations.js';
import {
    buttonAddEl,
    formNoteContentEl,
    formNoteTitleEl,
    notesListNoteTitle,
    notesListNoteContent,
    notesListUlEL,
    formEL,
    buttonSaveEl
} from './dom.js'

const addNote = (title, content) => {
    let note = new Note(title, content);
    note.pushNote();
    addCurrentNoteToList(notesArr.length - 1);
}

const addCurrentNoteToList = (noteNumber) => {
    let markup =
        `<li class="notes-list-element">
    <p class="notes-list-note-title">${notesArr[noteNumber]['title']}</p>
    <p class="notes-list-note-content">${notesArr[noteNumber]['content']}</p>
    </li>`;
    notesListUlEL.innerHTML += markup;
}

const evermik = _ => {
    buttonAddEl.addEventListener("click", _ => {
        addNote(formNoteTitleEl.value, formNoteContentEl.value);
        // clearForm(formNoteContentEl, formNoteTitleEl);
    });
    buttonSaveEl.addEventListener("click",
        _ => {
            download(`${notesArr[notesArr.length - 1]['time'].getTime()}.txt`, JSON.stringify(notesArr));
        }
    )
}

evermik();

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'block';
    element.style.background = 'red';
    element.style.width = '100px';
    element.style.height = '100px';
    document.body.appendChild(element);
    element.click();
    // document.body.removeChild(element);
}