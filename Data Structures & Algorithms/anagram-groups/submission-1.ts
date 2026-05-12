class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const groupMap: Map<string, string[]> = new Map();

        for (const str of strs) {
            // const key = str.split('').sort().join('');

            // Build key by joining with a delimiter to avoid colision
            // e.g., "1#0#0#..."
            const key = this.alphabetCharCount(str).join('#');

            if (!groupMap.has(key)) {
                groupMap.set(key, []);
            }

            groupMap.get(key)!.push(str);
        }

        return Array.from(groupMap.values());
    }

    private alphabetCharCount(str: string): number[] {
        // create count array from 26 lowercase letters
        const count: number[] = new Array(26).fill(0);

        for (const char of str) {
            /**
             *  ch.charCodeAt(0) returns ASCII code for each charachter
             *   {
             *      'a' -> 97
             *      'b' -> 98
             *      'c' -> 99
             *      ...
             *      'z' -> 122
             *    }
             * 
             *     index at "a" => 97 - 97 = 0
             *     index at "b" => 98 - 97 = 1
             *     index at "z" => 122 - 97 = 25
             */
            const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
            count[index]++;
        }

        return count;
    }
}
