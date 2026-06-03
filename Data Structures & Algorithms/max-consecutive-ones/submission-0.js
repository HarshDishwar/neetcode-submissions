class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let max = 0
        let k = 0
        for (let i = 0;i<nums.length;i++){
            if(nums[i]== 1){
                k++
                if(max<k){
                    max = k
                }
            }
            else{
                k=0
            }
        }
        return max
    }
}
