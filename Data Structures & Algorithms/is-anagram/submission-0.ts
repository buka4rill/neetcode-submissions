class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        // if lengths differ
        if (s.length !== t.length) return false;

        // conv string to arr
        const sMap = this.createHashMap(s);
        const tMap = this.createHashMap(t);

        for (const [char, count] of sMap.entries()) {
            if (tMap.get(char) !== count) return false;
        }

        return true;
    }

    private createHashMap(chars: string): Map<string, number> {
        const charMap = new Map<string, number>();
        for (const char of chars) {
            charMap.set(char, (charMap.get(char) ?? 0) + 1);
        }

        return charMap;
    }
}
