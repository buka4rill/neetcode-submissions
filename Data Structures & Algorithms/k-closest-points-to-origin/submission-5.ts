class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points: number[][], k: number): number[][] {
        const heap = new Heap();

        for (const point of points) {
            heap.push(point);

            if (heap.size() > k) {
                heap.pop();
            }
        }

        return heap.toArray();
    }
}

class Heap {
    private heap: number[][];
    
    constructor() {
        this.heap = [[]]; // dummy value at index 0
    }

    private dist(p: number[]): number {
        return p[0] * p[0] + p[1] * p[1];
    }

    private swap(i: number, j: number): void {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    push(val: number[]): void {
        this.heap.push(val);
        let i = this.heap.length - 1;

        // percolate up
        while (i > 1) {
            const parent = Math.floor(i / 2);

            if (this.dist(this.heap[i]) <= this.dist(this.heap[parent])) {
                break;
            }

            this.swap(parent, i);
            i = parent;
        }
    }

    pop(): number[] {
        if (this.heap.length <= 1) return null;
        if (this.heap.length == 2) return this.heap.pop();

        let res = this.heap[1];
        // move the last value to the root
        this.heap[1] = this.heap.pop();
        let i = 1;

        // Percolate down
        while(2 * i < this.heap.length) {
            let target = 2 * i; // left child

            const right = 2 * i + 1;
            if (right < this.heap.length 
                && this.dist(this.heap[right]) > this.dist(this.heap[target])
            ) {
                // choose right child
                target = right;
            }
            
            if (this.dist(this.heap[i]) < this.dist(this.heap[target])) {
                // swap left child
                this.swap(i, target)
                i = target;
            } else {
                break;
            }
        }
        return res;
    }

    size(): number {
        return this.heap.length - 1;
    }

    toArray(): number[][] {
        return this.heap.slice(1);
    }
}