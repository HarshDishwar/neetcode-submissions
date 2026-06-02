class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let j = 0
        for(let i = 1;i<=nums.length;i++){
            if(nums[i]!=nums[i-1]){
                nums[j]=nums[i-1]
                j++
            }
        }
        return j
    }
}
