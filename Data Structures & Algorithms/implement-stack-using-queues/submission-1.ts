class MyStack {
    private queue: number[];

    constructor() {
        this.queue = [];    
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x: number): void {
        // push el to the back of the queue
        this.queue.push(x);

        // rotate the queue so the new el comes to the front
        for (let i = 0; i < this.queue.length - 1; i++) {
            const front = this.queue.shift()!;
            this.queue.push(front);
        }
    }

    /**
     * @return {number}
     */
    pop(): number {
        // front of queue is top of stack
        return this.queue.shift()!;
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.queue[0];
    }

    /**
     * @return {boolean}
     */
    empty(): boolean {
        return this.queue.length === 0
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
