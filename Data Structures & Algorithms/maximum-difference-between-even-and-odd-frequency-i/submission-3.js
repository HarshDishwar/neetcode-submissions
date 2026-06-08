class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxDifference(s) {
        const array = []
        const map = new Map();
        let oddMax = 0
        let lowEven = Infinity
        for(let i = 0;i<s.length;i++){
            if(!map.has(s[i])){
                map.set(s[i],1)
            }
            else{
                map.set(s[i],map.get(s[i]) + 1)
            }
        }
        for(let [key,value] of map){
            if(value%2 != 0){
                if(oddMax<value){
                    oddMax=value
                }
            }
            else{
                if(lowEven>value){
                    lowEven = value
                }
            }
        }
        return oddMax-lowEven;

    }
}
