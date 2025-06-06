// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3


/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    for(let i=0;i<nums.length;i++){
        let count = 1;
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]===nums[j]){
                count++;
                
            }
        }
        if(count>nums.length/2){
                    return nums[i];
                }
    }
};