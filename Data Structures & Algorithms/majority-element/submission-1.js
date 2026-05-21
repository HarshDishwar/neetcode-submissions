class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let count = {}
        for (let i = 0; i < nums.length; i++) {
            count[nums[i]] = (count[nums[i]] || 0) + 1;
        }
        for (const [key, value] of Object.entries(count)) {
            if (value > nums.length / 2) return key;
        }
    }
}
