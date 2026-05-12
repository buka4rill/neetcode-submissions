class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const groupMap: Map<string, string[]> = new Map();

        for (const str of strs) {
            const key = str.split('').sort().join('');

            if (!groupMap.has(key)) {
                groupMap.set(key, []);
            }

            groupMap.get(key)!.push(str);
        }

        return Array.from(groupMap.values());
    }
}
