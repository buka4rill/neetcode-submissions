class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        // two pointer solution
        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            // skip non-alphanumeric from left
            while (left < right && !this.isAlphaNum(s[left])) {
                left++;
            }

            // skip non-alphanumeric from right
            while (left < right && !this.isAlphaNum(s[right])) {
                right--;
            }

            // compare (case-insensitive)
            if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;

            left++;
            right--;
        }

        return true;
    }

    isAlphaNum(c: string): boolean {
        const code = c.charCodeAt(0);

        const isDigit = code >= 48 && code <= 57;
        const isUpper = code >= 65 && code <= 90;
        const isLower = code >= 97 && code <= 122;

        return isDigit || isUpper || isLower;
    }
}