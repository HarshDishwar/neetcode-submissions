class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max = 0
        let min = prices[0]
        let mMax = 0
        for(let i = 0;i<prices.length;i++){
            if(prices[i]<min){
                min = prices[i]
            }
            max = prices[i]-min
            mMax = Math.max(mMax,max)
        }
        return mMax
    }
}
