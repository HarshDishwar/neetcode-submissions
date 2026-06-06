class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxAscendingSum(nums) {
        let max = nums[0]
        let sum = nums[0]
        for(let i = 1;i<nums.length;i++){
            if(nums[i-1]<nums[i]){
                sum = sum + nums[i]
                if(max<sum){
                    max = sum
                }
            }
            else {
                sum = nums[i]
            }
        }
        return max
    }
}
