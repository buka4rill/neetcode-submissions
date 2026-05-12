/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        // change each node's `next` to point to previous node
        let prev = null, curr = head;

        while (curr !== null) {
            let nxt = curr.next

            // reverese the pointers
            curr.next = prev;
            prev = curr;
            curr = nxt;
        }

        return prev;
    }
}
