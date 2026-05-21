class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const ans= []
        for (let n = 0;n<=1;n++){
            for(let i = 0;i<=nums.length-1;i++){
                ans[n*nums.length +i]=nums[i]
            }
        }
        return ans
    }
}
