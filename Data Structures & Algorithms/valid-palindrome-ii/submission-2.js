class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let right = s.length-1
        let left = 0
        for(;left<right ;right--,left++){
            if(s[left]!==s[right]){
                return this.ispalindrome(s,left+1,right)||this.ispalindrome(s,left,right-1)
            }
        }
        return true
    }
    ispalindrome(s,left,right){
        for(;left<right;right--,left++){
            if(s[left]!==s[right]){
                return false
            }
        }
        return true
    }
}
