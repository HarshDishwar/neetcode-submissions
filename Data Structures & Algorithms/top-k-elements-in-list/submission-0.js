class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map()
        for(let i = 0; i<=nums.length-1;i++){
            if(map.has(nums[i])){
                map.set(nums[i],map.get(nums[i])+1)
            }
            else{
                map.set(nums[i],1)
            }
        }
        const newArray = [...map]
        const hehe = []
        newArray.sort((a,b) => b[1] - a[1])
        for(let i = 0;i<k;i++){
            hehe.push(newArray[i][0])

        }
        return hehe
    }
}
