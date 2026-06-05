class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const array = []
        let newArray = []
        const map = new Map();
        for(let i = 0;i<strs.length;i++){
           array.push(strs[i].split('').sort().join(''))
        }
        for(let j = 0;j<array.length;j++){
            if(!map.has(array[j])){
                map.set(array[j],strs[j])
            }
            else{
                map.set(array[j],map.get(array[j]) +' '+ strs[j] )
            }
        }
        for(let [key,value] of map ){
            newArray.push(value.split(' '))
        }

        return newArray

    }
}
