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
    stringsGuitarEl
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

let guitarD3Freq = 146.83*2;
let guitarG3Freq = guitarD3Freq * perfectFourth;
let guitarH3Freq = guitarD3Freq * majorSixth;
let guitarE4Freq = guitarH3Freq * perfectFourth;
let guitarA2Freq = guitarD3Freq / perfectFourth;
let guitarE2Freq = guitarE4Freq / 2 / 2;

export let freqChange = 10;
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

export const tune = _ => {
    upEl.addEventListener("click", _ => {
        violinA4Freq += freqChange;
        guitarD3Freq += freqChange;
        reCalc();
        infoEl.innerHTML = violinA4Freq;
        setFreq();
    })
    downEl.addEventListener("click", _ => {
        violinA4Freq -= freqChange;
        guitarD3Freq -= freqChange;
        reCalc();
        infoEl.innerHTML = violinA4Freq;
        setFreq();
    })
    resetEl.addEventListener("click", _ => {
        violinA4Freq = 440;
        guitarD3Freq = 146.83;
        reCalc();
        infoEl.innerHTML = 'popraw' + violinA4Freq;
        setFreq();
    })

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



instrumentChoiceEl.addEventListener('click', event => {
    console.log(event.target)
    if (event.target.matches(".violin-choice")) {
        off()
        currentInstrument = 'violin';
        oscillator.type = "triangle";
        stringsViolinEl.classList.remove("hidden");
        stringsGuitarEl.classList.add("hidden");

    } else if (event.target.matches(".guitar-choice")) {
        off()
        currentInstrument = 'guitar';
        oscillator.type = "sine";
        stringsViolinEl.classList.add("hidden");
        stringsGuitarEl.classList.remove("hidden");
    }
})

action();
tune();