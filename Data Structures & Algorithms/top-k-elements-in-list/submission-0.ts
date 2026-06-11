class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const freqMap = new Map<number, number>();

        // 1. count the frequency of each el
        for (const num of nums) {
            freqMap.set(num, (freqMap.get(num) ?? 0) + 1);
        }

        // 2. Create buckets where index = frequency
        // maximum possible frequency is nums.length
        const buckets: number[][] = Array.from(
            { length: nums.length + 1 },
            () => [] 
        );

        for (const [num, freq] of freqMap.entries()) {
            buckets[freq].push(num);
        }

        // 3. Iterate from right to left (highest freq to lowest)
        // to collect top k elements    
        const result: number[] = [];

        for (let freq = buckets.length -1; freq >= 0; freq--) {
            if (buckets[freq].length > 0) {
                for (const num of buckets[freq]) {
                    result.push(num);

                    if (result.length === k) {
                        return result;
                    }
                }
            }
        }

        return result;
    }
}
