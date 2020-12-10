let aFreq = 440;
let eFreq = aFreq * 1.5;
let dFreq = aFreq / 1.5;
let gFreq = aFreq / 1.5 / 1.5;
let freqArr = [eFreq, aFreq, dFreq, gFreq];
let freqChange = 1;
let indexPlaying;
let indexCurrent;

const reCalc = _ => {
    eFreq = aFreq * 1.5;
    dFreq = aFreq / 1.5;
    gFreq = aFreq / 1.5 / 1.5;
    freqArr = [eFreq, aFreq, dFreq, gFreq];
}

const setFreq = _ => {
    oscillator.frequency.value = freqArr[indexCurrent];
}

const mainEl = document.querySelector("main");
const upEl = document.querySelector(".up");
const downEl = document.querySelector(".down");
const resetEl = document.querySelector(".reset");
const infoEl = document.querySelector(".info");

infoEl.innerHTML = aFreq;

const ctx = new AudioContext();
const oscillator = ctx.createOscillator();
oscillator.type = "triangle";
const gainNode = ctx.createGain();
oscillator.connect(gainNode);
oscillator.start(0);
gainNode.gain.linearRampToValueAtTime(0, ctx.currentTime);
gainNode.connect(ctx.destination);

const on = _ => {
    gainNode.gain.linearRampToValueAtTime(1, ctx.currentTime);
}
const off = _ => {
    gainNode.gain.linearRampToValueAtTime(0, ctx.currentTime);
}

const action = _ => {
    mainEl.addEventListener("click", event => {
        ctx.resume();
        const list = [...event.target.parentNode.children];
        indexCurrent = list.indexOf(event.target);

        if (indexPlaying === indexCurrent) {
            off();
            event.target.classList.remove("active");
            indexPlaying = null;
        } else {
            setFreq();
            on();
            for (let elem of list) {
                elem.classList.remove("active");
            }
            event.target.classList.add("active");
            indexPlaying = indexCurrent;
        }

    })
    window.addEventListener("keypress", event => {

        if (event.key === "4" || event.key === "e" ) {
            if (indexPlaying === 0) {
                off();
                indexPlaying = null;
            } else {
                indexCurrent = 0;
                setFreq();
                on();
                indexPlaying = indexCurrent;
            }
        } 

        if (event.key === "3" || event.key === "a") {
            if (indexPlaying === 1) {
                off();
                indexPlaying = null;
            } else {
                indexCurrent = 1;
                setFreq();
                on();
                indexPlaying = indexCurrent;
            }
        } 

        if (event.key === "2" || event.key === "d") {
            if (indexPlaying === 2) {
                off();
                indexPlaying = null;
            } else {
                indexCurrent = 2;
                setFreq();
                on();
                indexPlaying = indexCurrent;
            }
        } 

        if (event.key === "1" || event.key === "g") {
            if (indexPlaying === 3) {
                off();
                indexPlaying = null;
            } else {
                indexCurrent = 3;
                setFreq();
                on();
                indexPlaying = indexCurrent;
            }
        } 
       

    })
}

const tune = _ => {
    upEl.addEventListener("click", _ => {
        aFreq += freqChange;
        reCalc();
        infoEl.innerHTML = aFreq;
        setFreq();
    })
    downEl.addEventListener("click", _ => {
        aFreq -= freqChange;
        reCalc();
        infoEl.innerHTML = aFreq;
        setFreq();
    })
    resetEl.addEventListener("click", _ => {
        aFreq = 440;
        reCalc();
        infoEl.innerHTML = aFreq;
        setFreq();
    })

}

action();
tune();