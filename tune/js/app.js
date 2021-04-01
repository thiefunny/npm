import {
    mainEl,
    upEl,
    downEl,
    resetEl,
    infoEl,
    guitarEl,
    violinEl,
    instrumentChoiceEl,
    stringsViolinEl,
    stringsGuitarEl,
    hzEl,
    silenceEl
}
from './dom.js'

import {
    majorThird,
    perfectFourth,
    perfectFifth,
    minorSixth,
    majorSixth,
    minorSeventh
}
from './intervals.js'

let violinA4Freq = 440;
let violinE5Freq = violinA4Freq * perfectFifth;
let violinD4Freq = violinA4Freq / perfectFifth;
let violinG3Freq = violinA4Freq / perfectFifth / perfectFifth;

let guitarFreqMultiplier = 2;
let guitarD3Freq = 146.83 * guitarFreqMultiplier;
let guitarG3Freq = guitarD3Freq * perfectFourth;
let guitarH3Freq = guitarD3Freq * majorSixth;
let guitarE4Freq = guitarH3Freq * perfectFourth;
let guitarA2Freq = guitarD3Freq / perfectFourth;
let guitarE2Freq = guitarE4Freq / 2 / 2;

export let freqChange = 1;
let indexPlaying;
let indexCurrent;
let currentInstrument = 'violin';

let instruments = {
    'violin': [violinE5Freq, violinA4Freq, violinD4Freq, violinG3Freq],
    'guitar': [guitarE4Freq, guitarH3Freq, guitarG3Freq, guitarD3Freq, guitarA2Freq, guitarE2Freq]
}

export const reCalc = _ => {
    updateFrequencies();
    instruments = {
        violin: [violinE5Freq, violinA4Freq, violinD4Freq, violinG3Freq],
        guitar: [guitarE4Freq, guitarH3Freq, guitarG3Freq, guitarD3Freq, guitarA2Freq, guitarE2Freq]
    }
}

export const setFreq = _ => {
    oscillator.frequency.value = instruments[currentInstrument][indexCurrent];
}

const updateFrequencies = _ => {
    violinE5Freq = violinA4Freq * perfectFifth;
    violinD4Freq = violinA4Freq / perfectFifth;
    violinG3Freq = violinA4Freq / perfectFifth / perfectFifth;
    guitarG3Freq = guitarD3Freq * perfectFourth;
    guitarH3Freq = guitarD3Freq * majorSixth;
    guitarE4Freq = guitarH3Freq * perfectFourth;
    guitarA2Freq = guitarD3Freq / perfectFourth;
    guitarE2Freq = guitarE4Freq / 2 / 2;
}

infoEl.innerHTML = violinA4Freq;

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

const alert = _ => {
    let i = 20;
    const alert = setInterval(_ => {
        if (i > 0) {
            hzEl.style.backgroundColor = `rgb(${205+i*5}, ${79+i*5}, ${24+i*5})`
            i--;
        } else clearInterval(alert)
    }, 10)
}

const infoHzUpdate = _ => {
    infoEl.innerHTML = violinA4Freq;
}

const tuneFunctions = _ => {
    reCalc();
    infoHzUpdate();
    alert();
    setFreq();
}

export const tune = _ => {
    upEl.addEventListener("click", _ => {
        violinA4Freq += freqChange;
        guitarD3Freq += freqChange;
        tuneFunctions()
    })
    downEl.addEventListener("click", _ => {
        violinA4Freq -= freqChange;
        guitarD3Freq -= freqChange;
        tuneFunctions()
    })
    resetEl.addEventListener("click", _ => {
        violinA4Freq = 440;
        guitarD3Freq = 146.83 * guitarFreqMultiplier;
        tuneFunctions()
    })

}

const action = _ => {
    mainEl.addEventListener("click", event => {
        
        ctx.resume();
        let targetLi = event.target;
        let list = [...event.target.parentNode.children];
        indexCurrent = list.indexOf(event.target);

        if (event.target.matches('p') || event.target.matches('span')) {
            targetLi = event.target.parentNode;
            list = [...targetLi.parentNode.children];
            indexCurrent = list.indexOf(targetLi);
        }
        if (event.target.matches('sub')) {
            targetLi = event.target.parentNode.parentNode;
            list = [...targetLi.parentNode.children];
            indexCurrent = list.indexOf(targetLi);
        }

        if (indexPlaying === indexCurrent) {
            off();
            targetLi.classList.remove("active");
            indexPlaying = null;
        } else {
            setFreq();
            on();
            for (let elem of list) {
                elem.classList.remove("active");
            }
            targetLi.classList.add("active");
            indexPlaying = indexCurrent;
        }
    })

    const playString = indexArgument => {
        if (indexPlaying === indexArgument) {
            off();
            indexPlaying = null;
        } else {
            indexCurrent = indexArgument;
            setFreq();
            on();
            indexPlaying = indexCurrent;
        }
    }

    const pressedKeyListener = instrument => {

        window.addEventListener("keypress", event => {

            if (currentInstrument === 'violin') {

                if (event.key === "4" || event.key === "e") {
                    playString(0);
                }
                if (event.key === "3" || event.key === "a") {
                    playString(1);
                }
                if (event.key === "2" || event.key === "d") {
                    playString(2);
                }
                if (event.key === "1" || event.key === "g") {
                    playString(3);
                }

            } else if (currentInstrument === 'guitar') {

                if (event.key === "6" || event.key === "e") {
                    playString(0);
                }
                if (event.key === "5" || event.key === "h") {
                    playString(1);
                }
                if (event.key === "4" || event.key === "g") {
                    playString(2);
                }
                if (event.key === "3" || event.key === "d") {
                    playString(3);
                }
                if (event.key === "2" || event.key === "a") {
                    playString(4);
                }
                if (event.key === "1" || (event.key === "E" && event.shiftKey)) {
                    playString(5);
                }
            }
        })
    }

    pressedKeyListener(currentInstrument);

}

const refreshInstrument = _ => {
    [...document.querySelectorAll('li')].forEach(elem => elem.classList.remove('active'));
    indexPlaying = null;
    indexCurrent = null;
}

violinEl.addEventListener('click', _ => {
    off()
    currentInstrument = 'violin';
    oscillator.type = "triangle";
    stringsViolinEl.classList.remove("hidden");
    stringsGuitarEl.classList.add("hidden");
    violinEl.innerHTML = "You're tuning violin";
    violinEl.classList.add("activeinstrument")
    guitarEl.classList.remove("activeinstrument")
    guitarEl.innerHTML = "Choose guitar";
    refreshInstrument()
})

guitarEl.addEventListener('click', _ => {
    off()
    currentInstrument = 'guitar';
    oscillator.type = "sine";
    stringsViolinEl.classList.add("hidden");
    stringsGuitarEl.classList.remove("hidden");
    guitarEl.innerHTML = "You're tuning guitar";
    guitarEl.classList.add("activeinstrument")
    violinEl.classList.remove("activeinstrument")
    violinEl.innerHTML = "Choose violin";
    refreshInstrument()
})

silenceEl.addEventListener('click', _ => off())

violinEl.innerHTML = "You're tuning violin";
violinEl.classList.add("activeinstrument")
guitarEl.classList.remove("activeinstrument")
guitarEl.innerHTML = "Choose guitar";

action();
tune();