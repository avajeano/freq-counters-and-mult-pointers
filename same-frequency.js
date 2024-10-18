// helper function
function makeFreqCounter(str){
    const freqCounter = {};
    for(let el of str) {
        freqCounter[el] = (freqCounter[el] + 1) || 1;
    }
    return freqCounter;
}

// given two integers 
// does the same number of digits appear in each
// returns a boolean 
function sameFrequency(num1, num2) {
    num1Str = num1.toString();
    num2Str = num2.toString();

    num1Freq = makeFreqCounter(num1Str);
    num2Freq = makeFreqCounter(num2Str);

    for(let el in num1Freq) {
        if(!num2Freq[el]) return false;
        if(num1Freq[el] !== num2Freq[el]) return false;
    }
    return true;
}

module.exports = { sameFrequency };