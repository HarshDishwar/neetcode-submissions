class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s, t) {
        let j = 0
        for(let i = 0;i<s.length;i++){
          if(t[j]==s[i]){
                j++
            }
            else{
                continue
            }
            
        }
        return t.length-j
    }
}
