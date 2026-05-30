class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        let temp
        let left = 0
        let right = s.length-1
        while(left<right){
            temp = s[left]
            s[left] = s[right]
            s[right] = temp
            right--
            left++
        }
        return s
    }
}
