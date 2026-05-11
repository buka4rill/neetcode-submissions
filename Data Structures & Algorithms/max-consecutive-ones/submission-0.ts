class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let count = 0;
        let maxCount = 0;

        for (let i=0; i<nums.length; i++) {
            if (nums[i] !== 1) {
                count = 0;
                continue;
            }

            count++;

            if (count > maxCount)
                maxCount = count;
           
        }

        return maxCount;
    }
}
