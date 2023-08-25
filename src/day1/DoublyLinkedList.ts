class Node<T> {
    public value: T;
    public prev: Node<T> | null;
    public next: Node<T> | null; 
} 

export default class DoublyLinkedList<T> {
    public length: number;
    private head: Node<T> | null;
    private tail: Node<T> | null;

    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    prepend(item: T): void {
        const node = {value: item} as Node<T>;

        this.length++;
        if(!this.head) {
            this.head = node;
            this.tail = node;
            return;
        }

        node.next = this.head;
        this.head.prev = node;
        this.head = node;

        return;
    }

    insertAt(item: T, idx: number): void {
        if(idx > this.length) {
            throw new Error("nope, you are targeting too much");
        } else if (idx === this.length){
            this.append(item);
        } else if (idx === 0) {
            this.prepend(item);
        }

        let curr = this.getAt(idx) as Node<T>;
        const node = {value: item} as Node<T>;        
        this.length++;
        
        node.next = curr;
        node.prev = curr.prev;
        curr.prev = node;

        if(node.prev){
            node.prev.next = node;
        }

    }

    append(item: T): void {
        const node = {value: item} as Node<T>;

        this.length++;
        if(!this.tail) {
            this.head = node;
            this.tail = node;
            return;
        }

        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
    }

    remove(item: T): T | undefined {
        let curr = this.head;
        for (let i = 0; curr && i < this.length; i++) { 
            if(curr.value == item) {
                break;
            }
            curr = curr.next;
        }

        // if we couldn't find the element
        if (!curr) {
            return undefined;
        }

        return this.removeNode(curr);
    }

    get(idx: number): T | undefined {
        return this.getAt(idx)?.value;

    }

    removeAt(idx: number): T | undefined {
        const node = this.getAt(idx);

        if (!node) {
            return undefined;
        }

        return this.removeNode(node);

    }

    private removeNode(node: Node<T>): T | undefined {
        this.length--;

        if (this.length === 0) {
            const out = this.head?.value;
            this.head = null;
            this.tail = null;
            return out;
        }

        if (node.next) {
            node.next.prev = node.prev;
        }
        if (node.prev) {
            node.prev.next = node.next;
        }

        if(node === this.head) {
            this.head = node.next;
        }

        if(node === this.tail) {
            this.tail = node.prev;
        }

        node.prev = null;
        node.next = null;

        return node.value;
    }

    private getAt(idx: number): Node<T> | undefined {
        let curr = this.head;

        // iterate to the target
        for(let i = 0; curr && i < idx; i++) {
            curr = curr.next;
        }

        if(!curr) {
            return undefined;
        }

        return curr;
    }
}