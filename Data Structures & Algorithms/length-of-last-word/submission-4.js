class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        let array = []
        let n = s.length-1
        array = s.split(' ')  
        console.log(array)
        for(let i = array.length-1;i>=0;i--){
            if(array[i] != ''){
                return array[i].length
            }
        }return 0
    }
}
