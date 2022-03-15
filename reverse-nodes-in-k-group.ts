
// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    
    let node = head, newHead = null, newNode = null;
    let s = [];
    while(node) {
        if(s.length < k) {
            s.push(node);
        }
        if(s.length == k) {
            let popNode = new ListNode(s.pop().val);
            if(!newHead) {
                newHead = popNode;
            }
            if(newNode) {
                newNode.next = popNode;
            }
            while(s.length > 0) {
                popNode.next = new ListNode(s.pop().val);
                popNode = popNode.next;
            }
            newNode = popNode;
        }
        node = node.next;
    }
    if(s.length > 0) {
        newNode.next = s[0];
    }
    return newHead;
}