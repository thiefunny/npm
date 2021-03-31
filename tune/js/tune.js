import {
    setFreq,
    reCalc,
    violinA4Freq,
    guitarD3Freq
}
from './app.js'

import {
    mainEl,
    upEl,
    downEl,
    resetEl,
    infoEl,
    guitarEl,
    violinEl
}
from './dom.js'

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