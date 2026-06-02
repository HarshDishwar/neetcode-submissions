class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const map = new Map();
         for(let i = 0 ;i<numbers.length;i++){
            map.set(numbers[i],i+1)
        }
        for(let j = 0;j<numbers.length;j++){
            if(map.has(target - numbers[j])){
                return [j+1,map.get(target - numbers[j])]
            }
        }
        return false
    }
}
