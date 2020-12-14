import {
    notesArr,
    Note,
    clearForm,
    addNote,
    addCurrentNoteToHTMLList,
    editCurrentNoteInHTMLList,
    showNoteToEdit,
    saveFile,
    // showNoteToEdit
} from './declarations2.js';
import {
    buttonAddEl,
    formNoteContentEl,
    formNoteTitleEl,
    notesListUlEL,
    buttonSaveEl,
    formEL,
    buttonEditEl,
    
} from './dom.js'


const evermik = _ => {
    
    let currentNoteIndex;

    buttonEditEl.addEventListener("click", _ => {
        notesArr[currentNoteIndex].title = formNoteTitleEl.value;
        notesArr[currentNoteIndex].content = formNoteContentEl.value;
        console.log(notesArr)
        editCurrentNoteInHTMLList(currentNoteIndex);
    })

    ///////////// ADD NOTE    

    buttonAddEl.addEventListener("click", _ => {
        addNote(formNoteTitleEl.value, formNoteContentEl.value);
        buttonAddEl.blur();
        formNoteTitleEl.focus();
        // clearForm(formNoteContentEl, formNoteTitleEl);
    });

    ///////////// FIND INDEX OF NOTE AND SHOE NOTE TO EDIT

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
        showNoteToEdit(currentNoteIndex);
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