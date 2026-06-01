class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let output = []
        let right = []
        let left = []

        left[0]=1
        for(let i = 1;i<nums.length;i++){
            left[i]=left[i-1]*nums[i-1]
        }
        let index = nums.length-1
        right[index]=1
        for(let j = index-1;j>=0;j--){
            right[j]= right[j+1]*nums[j+1]
        }

        for(let k = 0;k<nums.length;k++){
            output[k] = right[k]*left[k] 
        }
        return output
    }
}
