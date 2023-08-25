export default class MinHeap {
    public length: number;
    private data: number[];
    

    constructor() {
        this.length = 0;
        this.data = [];
    }

    insert(value: number): void {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }

    delete(): number {
        if (this.length === 0) {
            return -1;
        }

        this.length--;
        const out = this.data[0];

        if (this.length === 0) {
            this.data = [];
            return out;
        }

        this.data[0] = this.data[this.length];
        this.heapifyDown(0);
        return out;
    }

    private parent(idx: number): number {
        return Math.floor((idx-1)/2);
    }

    private leftChild(idx: number): number {
        return idx * 2 + 1;
    }

    private rightChild(idx: number): number {
        return idx * 2 + 2;
    }

    private heapifyDown(idx: number): void {
        if (idx >= this.length) {
            return;
        }

        const left_idx = this.leftChild(idx);
        const right_idx = this.rightChild(idx);

        // check left child because  heap is filled from left to right
        if (left_idx >= this.length) {
            return
        }

        const value = this.data[idx];
        const left_value = this.data[left_idx];
        const right_value = this.data[right_idx];

        if (left_value > right_value && value > right_value) {
            this.data[idx] = right_value;
            this.data[right_idx] = value;
            this.heapifyDown(right_idx);
        } else if (right_value > left_value && value > left_value) {
            this.data[idx] = left_value;
            this.data[left_idx] = value;
            this.heapifyDown(left_idx);
        }
    }

    private heapifyUp(idx: number): void {
        if (idx === 0) {
            return;
        }

        const parent_idx = this.parent(idx)
        const parent = this.data[parent_idx]
        const value = this.data[idx]

        if (parent > value) {
            this.data[idx] = parent;
            this.data[parent_idx] = value;
            this.heapifyUp(parent_idx)
        }
    }
}