export default class MinHeapGNode {
    public length: number;
    private data: HeapNode[];

    constructor() {
        this.length = 0;
        this.data = [];
    }

    insert(node: HeapNode): void {  
        // insert at the end, go up
        this.data[this.length] = node;
        this.heapifyUp(this.length);
        this.length++;
    }

    delete(): number {//HeapNode | undefined {
        if (this.length === 0) {
            return -1;//undefined;
        }

        this.length--;
        const out = this.data[0];

        if (this.length === 0) {
            this.data = [];
            return out.dist;
        }

        this.data[0] = this.data[this.length];
        this.heapifyDown(0);
        return out.dist;
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

    // log(n) time
    private heapifyDown(idx: number): void {
        if (idx >= this.length) {
            return;
        }

        const left_idx = this.leftChild(idx);
        const right_idx = this.rightChild(idx);

        if (left_idx >= this.length) {
            return;
        }

        const left_val = this.data[left_idx];
        const right_val = this.data[right_idx];
        const curr_val = this.data[idx];

        if(right_val.dist > left_val.dist && curr_val.dist > left_val.dist) {
            this.data[left_idx] = curr_val;
            this.data[idx] = left_val;
            this.heapifyDown(left_idx);
        } else if (left_val.dist > right_val.dist && curr_val.dist > right_val.dist) {
            this.data[right_idx] = curr_val;
            this.data[idx] = right_val;
            this.heapifyDown(right_idx);
        }

        return
    }

    // log(n) time
    private heapifyUp(idx: number): void {
        if (idx === 0) {
            return;
        }

        const parent_idx = this.parent(idx);
        const parent = this.data[parent_idx];
        const curr = this.data[idx];

        if (curr.dist < parent.dist) {
            this.data[parent_idx] = curr;
            this.data[idx] = parent;
            this.heapifyUp(parent_idx);
        }

        return;
    }

        
}