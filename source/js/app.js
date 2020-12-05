let x = 0;
let aFreq = 440;
let eFreq = aFreq * 1.5;
let dFreq = aFreq / 1.5;
let gFreq = aFreq / 1.5 / 1.5;
let freqArr = [eFreq, aFreq, dFreq, gFreq];
let indexPlaying;

const mainEl = document.querySelector("main");

const context = new AudioContext();
const oscillator = context.createOscillator();
oscillator.type = "triangle";
const gainNode = context.createGain();
oscillator.start(0);
oscillator.connect(gainNode);
oscillator.disconnect(gainNode);
gainNode.connect(context.destination);

// const duration = 2;

const play = index => {
    oscillator.frequency.value = index;
    oscillator.connect(gainNode);
}

const action = _ => {
    mainEl.addEventListener("click", event => {
        const list = [...event.target.parentNode.children];
        let index = list.indexOf(event.target);

        if (indexPlaying === index) {
            oscillator.disconnect(gainNode);
            indexPlaying = null;
        } else {
            play(freqArr[index]);
            indexPlaying = index;
        }

    })
}

action();