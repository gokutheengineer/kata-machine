// stack node
class Node<T> {
    public value: T;
    public next: Node<T> | undefined;
}

export default class Stack<T> {
    public length: number;
    private top: Node<T> | undefined;
    

    constructor() {
        this.length = 0;
        this.top = undefined;
    }

    push(item: T): void {
        const node = {value: item} as Node<T>;

        this.length++;  

        // if the stack is empty
        if (!this.top) {
            this.top = node;
            return;
        }

        node.next = this.top;
        this.top = node;


}
    pop(): T | undefined {
        if (!this.top) {
            return undefined;
        }

        this.length--;
        
        const value = this.top.value;
        this.top = this.top.next;

        return value;  

}
    peek(): T | undefined {
        if (this.top === undefined) {
            return undefined;
        }
        return this.top.value;
}
}