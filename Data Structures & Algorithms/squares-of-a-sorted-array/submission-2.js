class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums) {
        let i = 0
        let j = nums.length-1
        let array = []

        while(i<=j){
            if(nums[i]*nums[i] > nums[j]*nums[j]){
                array.push(nums[i]*nums[i])
                i++
            }
            else{
                array.push(nums[j]*nums[j])
                j--
            }
        }
        return array.reverse();
    }
}
