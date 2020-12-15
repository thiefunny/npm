import {
    notesArr,
    clearForm,
    addNote,
    updateCurrentNoteInHTMLList,
    editCurrentNoteInArray,
    // deleteCurrentNoteInHTMLList,
    deleteCurrentNoteInArray,
    showNoteToEdit,
    saveFile,
} from './declarations.js';
import {
    buttonAddEl,
    formNoteContentEl,
    formNoteTitleEl,
    notesListUlEL,
    buttonSaveEl,
    formEL,
    buttonEditEl,
    buttonDeleteEl,
    buttonAttachEl,
    divAttachEl
} from './dom.js'


const evermik = _ => {

    let currentNoteIndex;

    ///////////// ADD NOTE    

    buttonAddEl.addEventListener("click", _ => {
        addNote(formNoteTitleEl.value, formNoteContentEl.value);
        buttonAddEl.blur();
        formNoteTitleEl.focus();
        // clearForm(formNoteContentEl, formNoteTitleEl);
    });

    ///////////// FIND INDEX OF NOTE AND SHOW NOTE TO EDIT

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

    ///////////// EDIT NOTE    

    buttonEditEl.addEventListener("click", _ => {
        editCurrentNoteInArray(currentNoteIndex);
        updateCurrentNoteInHTMLList(currentNoteIndex);
    })

    ///////////// DELETE NOTE    

    buttonDeleteEl.addEventListener("click", _ => {
        deleteCurrentNoteInArray(currentNoteIndex);
        updateCurrentNoteInHTMLList(currentNoteIndex);
    })

    ///////////// ATTACH A FILE    

    // divAttachEl.addEventListener("drop", event => {
    //     // event.dataTransfer.files
    //     event.
    // })
    divAttachEl.ondragenter = event => {
        // event.preventDefault();
        event.preventDefault();
        // event.stopPropagation();
        console.log('mikenter');
    };

    divAttachEl.ondragover = event => {
        event.preventDefault();
        // event.stopPropagation();
        console.log('mikover');
    };

    divAttachEl.ondrop = event => {
        event.preventDefault();
        // event.stopPropagation();
        console.log('mikdrop');
    };

    // divAttachEl.onclick = _ => console.log('miki')
    // divAttachEl.addEventListener("click", _ => console.log('miki2'))
    // divAttachEl.ondragenter = _ => console.log('mik');
    // window.ondragend(console.log('mik'))


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