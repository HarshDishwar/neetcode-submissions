class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let i = 0
        let j = 1
        let k = 1
        while(i<nums.length && j<nums.length){
            if(nums[i] == nums[j]){
                j++
            }
            else{
                nums[i+1]=nums[j]
                i++
                j++
                k = k + 1

            }
            
        }
        return k
    }
}
