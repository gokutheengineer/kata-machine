class Node<T> {
    public value: T;
    public next: Node<T> | undefined;
}

export default class Queue<T> {
    public length: number;
    private head: Node<T> | undefined;
    private tail: Node<T> | undefined;
    

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    enqueue(item: T): void {
        // create a new item
        const node = {value: item} as Node<T>;

        this.length++;

        // if the queue is empty, set the head and tail to the new item
        if (!this.tail) {
            this.head = node;
            this.tail = node;
            return;
        }

        this.tail.next = node;
        this.tail = node;

}
    deque(): T | undefined {
        // check if the queue is empty
        if (this.head === undefined) {
            return undefined;
        }
        
        this.length--;

        // move the head up
        const value = this.head.value;
        this.head = this.head.next;

        // if list has no remaining items, set the tail to undefined
        if (this.head === undefined) {
            this.tail = undefined;
        }

        return value;

}
    peek(): T | undefined {
        if (this.head === undefined) {
            return undefined;
        }
        return this.head.value;

}
}