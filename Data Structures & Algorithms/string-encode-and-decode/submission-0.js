class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encode = ""
        let i = 0
        while (i < strs.length) {
            encode = encode + strs[i].length + '#' + strs[i]
            i++
        }
        console.log(encode)
        return encode
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let ans = []
        let i = 0
        while (i < str.length) {
            let j = i
            while (str[j] != '#') {
                j++
            }
            let length = Number(str.slice(i, j))

            let word = str.slice(j + 1, j + 1 + length)

            i = j+1+length

            ans.push(word)

        }
        return ans
    }
}
