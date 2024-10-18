// takes an array of sorted numbers and an integer as the target
// finds a pair of numbers that averages to the target 
function averagePair(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while(left < right) {
        const avg = (nums[left] + nums[right])/2;
        if(avg === target) {
            return true;
        }   else if(avg > target) {
            right --;
        }   else {
            left ++;
        }
    }
    return false;
}

module.exports = { averagePair };