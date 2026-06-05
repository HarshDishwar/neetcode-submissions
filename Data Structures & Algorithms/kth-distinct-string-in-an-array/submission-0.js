class Solution {
    /**
     * @param {string[]} arr
     * @param {number} k
     * @return {string}
     */
    kthDistinct(arr, k) {
        const map = new Map();

        // Count frequency of each string
        for (let str of arr) {
            map.set(str, (map.get(str) || 0) + 1);
        }

        // Find the k-th distinct string in original order
        for (let str of arr) {
            if (map.get(str) === 1) {
                k--;
                if (k === 0) {
                    return str;
                }
            }
        }

        return "";
    }
}