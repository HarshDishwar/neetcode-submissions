class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const newMap = new Set()
        for (let i=0 ;i<=nums.length-1;i++){
            if(newMap.has(nums[i])){
                return true
            }
            else{newMap.add(nums[i])}
        }
        return false
    }
}
