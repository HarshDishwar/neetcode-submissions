class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        let last = s.length - 1;

        // Skip trailing spaces
        while (last >= 0 && s[last] === ' ') {
            last--;
        }

        let count = 0;

        // Count the last word
        while (last >= 0 && s[last] !== ' ') {
            count++;
            last--;
        }

        return count;
    }
}