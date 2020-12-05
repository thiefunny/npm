const frequencies = {
    aFreq: 440,
    eFreq() {return this.aFreq*1.5},
    dFreq() {return this.aFreq/1.5},
    gFreq() {return this.aFreq/1.5/1.5},
}

console.log(frequencies.eFreq());

const eEl = document.querySelector(".e");

const context = new AudioContext();
const oscillator = context.createOscillator();
oscillator.type = "sine";

oscillator.frequency.value = 440;
const gainNode = context.createGain();

oscillator.connect(gainNode);
gainNode.connect(context.destination);

const duration = 2;

// oscillator.start(0);

gainNode.gain.linearRampToValueAtTime(0.1, context.currentTime + duration);
oscillator.stop(context.currentTime + duration);

const listeners = _ => {
    eEl.addEventListener("click", play)
}

listerens();