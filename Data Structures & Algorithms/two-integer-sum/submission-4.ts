class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let map = new Map();

        for (let i = 0; i < nums.length; i++) {
            let complement = target - nums[i];

            if (map.has(complement)) {
                // return index stored at key (complement) and curr index
                return [map.get(complement), i];
            }
            map.set(nums[i], i);
        }
        return [];
    }
}
