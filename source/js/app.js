let aFreq = 440;
let eFreq = aFreq * 1.5;
let dFreq = aFreq / 1.5;
let gFreq = aFreq / 1.5 / 1.5;
let freqArr = [eFreq, aFreq, dFreq, gFreq];
let freqChange = 2;

let indexPlaying;
let indexCurrent;

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
        const list = [...event.target.parentNode.children];
        indexCurrent = list.indexOf(event.target);

        if (indexPlaying === indexCurrent) {
            off();
            event.target.classList.remove("active");
            indexPlaying = null;
        } else {
            oscillator.frequency.value = freqArr[indexCurrent];
            on();
            for (let elem of list) {
                elem.classList.remove("active");
            }

            event.target.classList.add("active");
            indexPlaying = indexCurrent;
        }

    })
}

const tune = _ => {
    upEl.addEventListener("click", _ => {
        aFreq += freqChange;
        eFreq = aFreq * 1.5;
        dFreq = aFreq / 1.5;
        gFreq = aFreq / 1.5 / 1.5;
        freqArr = [eFreq, aFreq, dFreq, gFreq];
        infoEl.innerHTML = aFreq;

        oscillator.frequency.value = freqArr[indexCurrent];
    })
    downEl.addEventListener("click", _ => {
        aFreq -= freqChange;
        eFreq = aFreq * 1.5;
        dFreq = aFreq / 1.5;
        gFreq = aFreq / 1.5 / 1.5;
        freqArr = [eFreq, aFreq, dFreq, gFreq];
        infoEl.innerHTML = aFreq;

        oscillator.frequency.value = freqArr[indexCurrent];

    })
    resetEl.addEventListener("click", _ => {
        aFreq = 440;
        eFreq = aFreq * 1.5;
        dFreq = aFreq / 1.5;
        gFreq = aFreq / 1.5 / 1.5;
        freqArr = [eFreq, aFreq, dFreq, gFreq];
        infoEl.innerHTML = aFreq;

        oscillator.frequency.value = freqArr[indexCurrent];

    })

}

action();
tune();