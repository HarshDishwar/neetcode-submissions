class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const map = new Map()
        let v = nums.length/2
        for(let i = 0;i<=nums.length-1;i++){
            if(map.has(nums[i])){
                map.set(nums[i],map.get(nums[i])+1)
            }
            else{
                map.set(nums[i],1)
            }
        }
        for(let [key,value] of map){
            if(value>v){
                return key
            }
        }
    }
}
