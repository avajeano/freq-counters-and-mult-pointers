// nums is an array of numbers with no duplicates 
// target is the number that two pairs should sum 
// returns the number of pairs 
function countPairs(nums, target) {
    nums.sort((a,b) => a - b);

    let left = 0;
    let right = nums.length - 1;

    let numberOfPairs = 0;

    while(left < right) {
        let sum = nums[left] + nums[right];
        if(sum === target) {
            numberOfPairs++;
            left++;
            right--;
        }   else if (sum < target) {
            left++;
        }   else {
            right--;
        }
    }
    return numberOfPairs;
}   

module.exports = { countPairs };