// takes two arrays 
// returns an object with key value pairs 
function twoArrayObject(keys, values) {
    let obj = {};
    
    for(let i = 0; i < keys.length; i++) {
        // if there are not enough values
        // the remaining keys get value null
        obj[keys[i]] = i < values.length ? values[i] : null;
    }
    return obj;
}

module.exports = { twoArrayObject };