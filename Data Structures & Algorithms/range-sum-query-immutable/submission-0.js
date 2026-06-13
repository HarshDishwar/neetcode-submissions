class NumArray {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        this.nums = nums
        let sum = 0
        for (let i = 0; i < nums.length; i++) {
            sum += nums[i]
            nums[i] = sum

        }
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left, right) {
        return this.nums[right] - (left > 0 ? this.nums[left - 1] : 0)

    }
}
