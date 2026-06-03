class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let prefix = strs[0]
        let i = 1
        
        while(i < strs.length){
            if(strs[i].startsWith(prefix)){
                i++
            }
            else{
                prefix = prefix.slice(0, -1)
            }
        }
        return prefix
    }
}