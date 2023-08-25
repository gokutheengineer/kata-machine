function dfs_search(curr: BinaryNode<number> | null, needle: number): boolean {
    if(!curr) {
        return false;
    }

    if (curr.value === needle) {
        return true;
    } else if (curr.value < needle) {
        curr = curr.right
    } else if (curr.value > needle) {
        curr = curr.left
    }

    return dfs_search(curr, needle);
}

export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    return dfs_search(head, needle);
}