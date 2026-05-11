class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const numbersMap = this.createHashMap(nums);
        for (let num in numbersMap) {
            if (numbersMap[num] > 1) {
                return true;
            }
        }
        
        return false;
    }

    private createHashMap(numArr: number[]): {} {
        const charMap = {}
        for (let number of numArr) {
            if (charMap[number]) {
                charMap[number]++
            } else {
                charMap[number] = 1;
            }
        }

        return charMap;
    }
}
