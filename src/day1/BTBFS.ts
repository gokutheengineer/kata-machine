import Queue from "./Queue";


export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const q : Queue<BinaryNode<number>> =  new Queue<BinaryNode<number>>;

    q.enqueue(head);

    while(q.length) {
        const next = q.deque();

        if (next?.value === needle) {
            return true
        } 

        if (next?.left) {
            q.enqueue(next?.left)
        }

        if (next?.right) {
            q.enqueue(next?.right)
        }
    }

    return false;
}