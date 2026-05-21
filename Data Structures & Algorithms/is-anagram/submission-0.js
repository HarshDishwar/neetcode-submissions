class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        // If lengths differ, they can't be anagrams
        if (s.length !== t.length) {
            return false;
        }

        const map = new Map();

        // Count characters from s
        for (let ch of s) {
            map.set(ch, (map.get(ch) || 0) + 1);
        }

        // Reduce count using t
        for (let ch of t) {

            // Character not found
            if (!map.has(ch)) {
                return false;
            }

            map.set(ch, map.get(ch) - 1);

            // Extra character found
            if (map.get(ch) < 0) {
                return false;
            }
        }

        return true;
    }
}