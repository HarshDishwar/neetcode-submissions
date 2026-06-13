class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isIsomorphic(s, t) {
        const sToT = new Array(128).fill(0);  // s char → last seen index
        const tToS = new Array(128).fill(0);  // t char → last seen index

        for (let i = 0; i < s.length; i++) {
            const sc = s.charCodeAt(i);
            const tc = t.charCodeAt(i);
            console.log(sToT[sc],tToS[tc])

            if (sToT[sc] !== tToS[tc]) return false;

            sToT[sc] = i + 1;  // +1 so index 0 isn't "not visited"
            tToS[tc] = i + 1;
        }

        return true;
    }
}