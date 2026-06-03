class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        let j = 0
        for(let i = 0;i<details.length;i++){
            if(details[i].slice(11,13)>60){
                j++
            }
        }
        return j
    }
}
