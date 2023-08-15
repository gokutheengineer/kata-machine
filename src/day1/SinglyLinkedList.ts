class Node<T> {
    public value: T;
    public next: Node<T> | null;
}

export default class SinglyLinkedList<T> {
    public length: number;
    private head: Node<T> | null;
    private tail: Node<T> | null;   

    constructor() {
        this.length = 0;    
        this.head = null;
        this.tail = null;
    }

    prepend(item: T): void {
        this.length++;
        
        const node = {value: item, next: this.head};
        this.head = node;

        if (!this.tail) {
            this.tail = node;
        } 

    }

    insertAt(item: T, idx: number): void {
        this.length++;
        const node = {value: item, next: null};
        
        if (!this.head) {
            this.head = node;
            this.tail = node;
            return;
        } 

        let current = this.head;

        for (let i =0; i < idx && current; i++) {
            if (current?.next === null) {
                current.next = node;
                this.tail = node;
                return;
            }
            current = current.next;
        }

        current.next = node;
        this.tail = node;
    }

    append(item: T): void {
        this.length++;
        const node = {value: item, next: null};

       
        if (!this.tail) {
            this.head = node;
            this.tail = node;
            return;
        } 
        this.tail.next = node;
        this.tail = node;
    }

    remove(item: T): T | undefined {
        if (this.length === 0) {
            return undefined;
        }

        let node = this.head;
        let prev = null;
        let index = -1;

        for(let i = 0; i < this.length && node; i++) {
            if (node.value === item) {
                index = i;
                break;
            }
            prev = node;
            node = node.next; 
        }

        // if we did not find the element
        if (index === -1) {
            return undefined;
        }

        // if we are removing the first element, prev is null, we need to at the head
        if (prev === null) {
            this.head = node?.next || null;
        }

        // if we are removing the last elemnt, node.next will be null this means node we are removing is the tail, so we need to set the tail
        if (node?.next === null) {
            this.tail = prev;
        }

        // if we removing from the middle
        if (prev && node?.next) {
            prev.next = node?.next;
        }

        this.length--;

        return node?.value;
    }

    get(idx: number): T | undefined {
        let node = this.head;
        for(let i = 0; i < this.length && node; i++) {
            if (i === idx) {
                return node.value;  
            }
            node = node?.next || null;
        }

        return undefined;
    }

    removeAt(idx: number): T | undefined {
        if (idx >= this.length || idx < 0 || this.length === 0) {
            return undefined;
        } 

        let node = this.head;
        let prev = null;

        for(let i = 0; i < idx && node; i++) {
            prev = node;
            node = node.next; 
        }

        // if we are removing the first element, prev is null, we need to at the head
        if (prev === null) {
            this.head = node?.next || null;
        }

        // if we are removing the last elemnt, node.next will be null this means node we are removing is the tail, so we need to set the tail
        if (node?.next === null) {
            this.tail = prev;
        }

        // if we removing from the middle
        if (prev && node?.next) {
            prev.next = node?.next;
        }

        this.length--;

        return node?.value;
    }

    // return whole list as string
    print(): string {
        let node = this.head;
        let str = "";
        for(let i = 0; i < this.length && node; i++) {
            str += node.value + " ";
            node = node.next;
        }

        return str;
    }
}