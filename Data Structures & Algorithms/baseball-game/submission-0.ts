class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        const list: number[] = []
        for (let i=0; i < operations.length; i++) {
            if (!isNaN(Number(operations[i]))) {
                list.push(+operations[i]);
                continue;
            }

            if (operations[i] === '+') {
                list.push(list[list.length - 1] + list[list.length - 2]);
            } else if (operations[i] === "C") {
                list.pop();
            } else if (operations[i] === "D") {
                list.push(list[list.length-1] * 2);
            }

            
        }

        return this.sum(list);
    }

    private sum(nums: number[]) {
        return nums.reduce((acc, curr) => acc + curr, 0);
    }
}

