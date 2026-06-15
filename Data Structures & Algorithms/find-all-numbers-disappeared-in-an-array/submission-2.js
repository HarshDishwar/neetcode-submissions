class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findDisappearedNumbers(nums) {
        const array  = []
        const set = new Set(nums)
        for(let i = 1;i<=nums.length;i++){
            if(!set.has(i)){
                array.push(i)
            }
        }  
        return array   
    }
}
