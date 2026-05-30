class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isvalidPalindrone(s,left,right){
        while(left<right){
            if(s[left]==s[right]){
                left++
                right--
            }
            else{
                return false
            }
        }
        return true
    }
    validPalindrome(s) {
        let left = 0
        let right = s.length-1
        while(left<right){
            if(s[left]==s[right]){
                left++
                right--
            }
            else{
               return this.isvalidPalindrone(s,left,right-1) || this.isvalidPalindrone(s,left+1,right)
            }
        }
        return true

    }

}
