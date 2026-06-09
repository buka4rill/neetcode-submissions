class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        // two pointer solution II
        const str = s.replaceAll(/[^A-Za-z0-9]/g, "");

        let left = 0;
        let right = str.length - 1;

        while (left <= right) {
            if (str[left].toLowerCase() !== str[right].toLowerCase()) return false;

            left++;
            right--;
        }

        return true;
    }
}