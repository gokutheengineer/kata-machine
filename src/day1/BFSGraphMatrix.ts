import Queue from "./Queue";

export default function bfs(graph: WeightedAdjacencyMatrix, source: number, needle: number): number[] | null {
    const seen: boolean[] = new Array(graph.length).fill(false);
    const prev: number[] = new Array(graph.length).fill(-1);
    const q: Queue<number> = new Queue();
    const path: number[] = [];

    seen[source] = true;

    q.enqueue(source);

    do {
        const curr = q.deque(); 
        if (curr === undefined || curr === needle) {
            break
        }

        const adjs = graph[curr]
        for(let i =0; i < adjs.length; i++) {
            if (seen[i] || adjs[i] === 0){
                continue;
            } 
            seen[i] = true;
            prev[i] = curr;
            q.enqueue(i);
            
        }

    } while(q.length > 0)

    // check if we didn't foud the needle, return null
    if (prev[needle] === -1){
        return null
    }

    let curr = needle;

    // keep on iterating until seeing -1. Then add source as well, as it won't be added in this case.
    while(prev[curr] !== -1) {
        path.push(curr);
        curr = prev[curr];
    }
    path.push(source);

    return path.reverse();
}