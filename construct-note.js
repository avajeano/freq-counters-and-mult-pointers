// helper function
function makeFreqCounter(str) {
    const freqCounter = {};
    for (let el of str) {
        freqCounter[el] = (freqCounter[el] + 1) || 1;
    }
    return freqCounter;
}

// takes two strings, the message and the letters 
// can the given letters create the message 
// returns boolean 
function constructNote(msg, ltrs) {
    if(ltrs === "") return false;
    if(msg == "") return true;

    if(msg.length > ltrs.length) return false;
    
    const msgFreq = makeFreqCounter(msg);
    const ltrsFreq = makeFreqCounter(ltrs);

    for(let el in msgFreq) {
        if(!ltrsFreq[el] || ltrsFreq[el] < msgFreq[el]) return false;
    }
    return true;
}

module.exports = { constructNote };