function walk(
    graph: WeightedAdjacencyList, 
    curr: number, 
    needle: number, 
    seen: boolean[], 
    path: number[]): boolean {

    if (seen[curr]) {
        return false;
    }

    seen[curr] = true;

    // recurse
    //prev
    // push before returning true as this node is part of the path
    path.push(curr);
    if (curr === needle) {
        return true;
    }

    //recurse
    const list = graph[curr];
    for (let i =0; i < list.length; i++) {
        const edge = list[i]
        // get one edge on move as much as you can, if you find it, return true
        if(walk(graph, edge.to, needle, seen, path)) {
            return true
        }
    }

    // post
    // if we never found the path in this branch of the graph
    path.pop();

    return false;

}

export default function dfs(
    graph: WeightedAdjacencyList, 
    source: number, 
    needle: number): number[] | null {

    const seen: boolean[] = new Array(graph.length).fill(false);
    const path: number[] = [];

    walk(graph, source, needle, seen, path);
    
    if (path.length === 0) {
        return null
    }

    return path;
}