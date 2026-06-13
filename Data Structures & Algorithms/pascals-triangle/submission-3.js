class Solution {
    /**
     * @param {number} numRows
     * @return {number[][]}
     */
    generate(numRows) {
        let firstRow = [1]
        if (numRows == 0) return []
        let triangle = [[1]]
        if (numRows == 1) return triangle
        else {

            for (let i = 1; i < numRows; i++) {
                let row = []


                row.push(1)
                let prevRow = triangle[i - 1]

                for (let j = 1; j < i; j++) {
                    row.push(prevRow[j - 1] + prevRow[j])
                }
                row.push(1)
                triangle.push(row)
            }
        }
        return triangle
    }

}
