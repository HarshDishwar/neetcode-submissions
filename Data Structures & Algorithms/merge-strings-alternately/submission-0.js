class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let a 
        let b
        let input = ''
        let left = 0
        const length = word1.length > word2.length ? word1.length : word2.length
        while (left < length) {
            if (word1[left]) {
                input += word1[left]
            }
            if (word2[left]) {
                input += word2[left]
            }

            
            left++
        }
        return input
    }
}
