class Solution {
    /**
     * @param {string[]} words
     * @return {string[]}
     */
    stringMatching(words) {
        const result = [];

        for (let i = 0; i < words.length; i++) {       // i = candidate (substring)
            for (let j = 0; j < words.length; j++) {   // j = container
                if (i !== j && words[j].includes(words[i])) {
                    result.push(words[i]);
                    break; // found one container — no need to check more, move to next i
                }
            }
        }

        return result;
    }
}