export const updateFrequencies = _ => {
    violinE5Freq = violinA4Freq * perfectFifth;
    violinD4Freq = violinA4Freq / perfectFifth;
    violinG3Freq = violinA4Freq / perfectFifth / perfectFifth;
    guitarG3Freq = guitarD3Freq * perfectFourth;
    guitarH3Freq = guitarG3Freq * majorThird;
    guitarE4Freq = guitarH3Freq * perfectFourth;
    guitarA2Freq = guitarD3Freq / perfectFourth;
    guitarE2Freq = guitarD3Freq / minorSeventh;
}