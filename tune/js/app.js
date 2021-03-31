import {
    updateFrequencies
}
from './update-frequencies.js'

import {
    tune
}
from './tune.js'

import {
    mainEl,
    upEl,
    downEl,
    resetEl,
    infoEl,
    guitarEl,
    violinEl,
    instrumentChoiceEl
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

export let violinA4Freq = 440;
let violinE5Freq = violinA4Freq * perfectFifth;
let violinD4Freq = violinA4Freq / perfectFifth;
let violinG3Freq = violinA4Freq / perfectFifth / perfectFifth;

export let guitarD3Freq = 146.83;
let guitarG3Freq = guitarD3Freq * perfectFourth;
let guitarH3Freq = guitarG3Freq * majorThird;
let guitarE4Freq = guitarH3Freq * perfectFourth;
let guitarA2Freq = guitarD3Freq / perfectFourth;
let guitarE2Freq = guitarD3Freq / minorSeventh;

let freqChange = 1;
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

    const reaction = indexArgument => {
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

    window.addEventListener("keypress", event => {

        if (event.key === "4" || event.key === "e") {
            reaction(0);
        }
        if (event.key === "3" || event.key === "a") {
            reaction(1);
        }
        if (event.key === "2" || event.key === "d") {
            reaction(2);
        }
        if (event.key === "1" || event.key === "g") {
            reaction(3);
        }
    })
}

instrumentChoiceEl.addEventListener('click', event => {
    console.log(event.target)
    if (event.target.matches(".violin-choice")) {
        console.log('skrzypce')
        currentInstrument = 'violin';
        

    } else if (event.target.matches(".guitar-choice")) {
        currentInstrument = 'guitar';
        console.log('gitara')
    }
})

action();
tune();