class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {

        const merge = (left, mid, right) => {

            const temp = [];

            let i = left;      // left half pointer
            let j = mid + 1;   // right half pointer

            // merge two sorted halves
            while (i <= mid && j <= right) {

                if (nums[i] <= nums[j]) {
                    temp.push(nums[i]);
                    i++;
                } else {
                    temp.push(nums[j]);
                    j++;
                }
            }

            // remaining elements from left half
            while (i <= mid) {
                temp.push(nums[i]);
                i++;
            }

            // remaining elements from right half
            while (j <= right) {
                temp.push(nums[j]);
                j++;
            }

            // copy back into original array
            for (let k = 0; k < temp.length; k++) {
                nums[left + k] = temp[k];
            }
        };

        const divide = (left, right) => {

            // base case
            if (left >= right) {
                return;
            }

            const mid = Math.floor((left + right) / 2);

            // sort left half
            divide(left, mid);

            // sort right half
            divide(mid + 1, right);

            // merge sorted halves
            merge(left, mid, right);
        };

        divide(0, nums.length - 1);

        return nums;
    }
}