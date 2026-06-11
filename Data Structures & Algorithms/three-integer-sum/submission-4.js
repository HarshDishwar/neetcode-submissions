class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
threeSum(nums) {
    const array = []
    nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue  // ← skip duplicate i
        
        let left = i + 1
        let right = nums.length - 1
        let element = nums[i]

        while (left < right) {
            let sum = element + nums[left] + nums[right]

            if (sum === 0) {
                array.push([element, nums[left], nums[right]])
                while (left < right && nums[left] === nums[left + 1]) left++   // ← skip duplicate left
                while (left < right && nums[right] === nums[right - 1]) right-- // ← skip duplicate right
                left++
                right--
            } else if (sum < 0) {
                left++
            } else {
                right--
            }
        }
    }
    return array
}
}
