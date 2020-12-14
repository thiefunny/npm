import {
    notesArr,
    Note,
    clearForm,
    addNote,
    addCurrentNoteToHTMLList,
    saveFile,
    // showNoteToEdit
} from './declarations.js';
import {
    buttonAddEl,
    formNoteContentEl,
    formNoteTitleEl,
    notesListUlEL,
    buttonSaveEl,
    formEL,
    buttonEditEl
} from './dom.js'


const evermik = _ => {
    
    let currentNoteIndex;

    buttonEditEl.addEventListener("click", _ => {
        notesArr[currentNoteIndex].title = formNoteTitleEl.value;
        notesArr[currentNoteIndex].content = formNoteContentEl.value;
        console.log(notesArr)
    })

    const showNoteToEdit = () => {
        formNoteTitleEl.value = notesArr[currentNoteIndex].title;
        formNoteContentEl.value = notesArr[currentNoteIndex].content;
        buttonEditEl.classList.remove("hidden");
    }

    ///////////// ADD NOTE    

    buttonAddEl.addEventListener("click", _ => {
        addNote(formNoteTitleEl.value, formNoteContentEl.value);
        buttonAddEl.blur();
        formNoteTitleEl.focus();
        // clearForm(formNoteContentEl, formNoteTitleEl);
        // print()
    });

    ///////////// FIND INDEX OF NOTE

    notesListUlEL.addEventListener("click", event => {
        let parent, eventtarget;
        if (event.target.matches(".note-li-p")) {
            parent = event.target.parentNode.parentNode;
            eventtarget = event.target.parentNode;
        } else {
            parent = event.target.parentNode;
            eventtarget = event.target;
        }
        let arr = [...parent.children]
        currentNoteIndex = arr.indexOf(eventtarget);
        showNoteToEdit();
    })

    ///////////// SAVE FILE    

    buttonSaveEl.addEventListener("click",
        _ => {
            saveFile(`${notesArr[notesArr.length - 1]['time'].getTime()}.txt`, JSON.stringify(notesArr));
        }
    )

    // window.addEventListener("keypress",
    //     event => {
    //         if (event.key === "Enter" && event.ctrlKey) {
    //             saveFile(`${notesArr[notesArr.length - 1]['time'].getTime()}.txt`, JSON.stringify(notesArr));
    //         }
    //     }
    // )
}

evermik();