class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        // remove non-alphanumeric & lowercase
        const cleaned = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

        return cleaned === cleaned.split('').reverse().join('');
    }
}
