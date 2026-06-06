class Solution {
    /**
     * @param {string[]} emails
     * @return {number}
     */
    numUniqueEmails(emails) {
        const set = new Set();
        for(let i = 0;i<emails.length;i++){
            let [key,value] = emails[i].split('@')
            let correctName = key.split('+')[0].split('.').join('')    
            set.add(correctName + '@' + value)

        }
        return set.size
    }
}
