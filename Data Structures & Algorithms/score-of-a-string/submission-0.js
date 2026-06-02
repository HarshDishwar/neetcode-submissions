class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s) {
        let value = 0
        for(let i = 1 ;i<=s.length-1;i++){
            let score = Math.abs(s.charCodeAt(i)-s.charCodeAt(i-1))
            value = value + score
        }
        return value 
    }
}
