// takes an array of non-zero numbers
// positive numbers to the left and negative numbers to the right
// not sorted
// returns array
function separatePositive(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right ) {
        if(nums[left] < 0 && nums[right] > 0) {
            // swap
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left += 1;
            right -= 1;
        } else {
            if(nums[left] > 0) left += 1;
            else right -= 1;
        }
    }
    return nums;
}

module.exports = { separatePositive };