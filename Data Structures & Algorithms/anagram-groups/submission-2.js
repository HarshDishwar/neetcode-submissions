class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let newArray = []
        const map = new Map();
        for(let i = 0;i<strs.length;i++){
          const word = strs[i].split('').sort().join('')

            if(!map.has(word)){
                map.set(word,strs[i])
            }
            else{
                map.set(word,map.get(word) +' '+ strs[i] )
            }
        }
        for(let [key,value] of map ){
            newArray.push(value.split(' '))
        }

        return newArray

    }
}
