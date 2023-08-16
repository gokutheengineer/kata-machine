// declare 2D array of directions
const directions = [
    [-1, 0], 
    [0, 1], 
    [1, 0], 
    [0, -1]
]

function walk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point []) : boolean {
    // 1. check if we are off the map
    if (curr.x >= maze[0].length || curr.x < 0 ||
        curr.y >= maze.length || curr.y < 0 ) {
        return false;
    }

    // 2. check if this is a wall
    if (maze[curr.y][curr.x] === wall) {
        return false;
    }

    // 3. check if we have seen been here before
    if (seen[curr.y][curr.x]) {
        return false;
    }

    // 4. check if this is the end point, and if so include it in the path and return true
    if (curr.x === end.x && curr.y === end.y) {
        path.push(curr);
        return true;
    }

    //  we push the square we enter to the path
    path.push(curr);

    // mark the square as seen
    seen[curr.y][curr.x] = true;

    // recurse, there are 4 directions we can take
    // iterate over all directions of array
    for (let i = 0; i < directions.length; i++) {
        const [x,y] = directions[i];
        const newPoint = {x: directions[i][0] + curr.x, y: directions[i][1] + curr.y} as Point;
        // stop recursing
        if (walk(maze, wall, newPoint, end, seen, path)) {
            return true;
        }
    }

    // and pop, because if we are here on a square it means the recurse step after that did not end up with return true, so it should not be in the path
    path.pop();
    return false;
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    const seen: boolean[][] = [];
    const path: Point[] = [];

    for (let i = 0; i < maze.length; i++) {
        seen.push(new Array(maze[0].length).fill(false));
    }

    walk(maze, wall, start, end, seen, path);
    return path
}





