class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        for(let i = 0 ;i<=nums.length-1;i++){
            for(let j = 1;j<=nums.length-1;j++){
                if(i==j){
                    break;
                }
                else if(nums[i] == nums[j]){
                    return true
                }
            }
        }
        return false 
    }
}
