// recursion function that does the checks and bookkeeping
// Inclusive indexes!
function qs(arr: number[], lo: number, hi: number) {
    if (lo >= hi){
        return
    }

    const pivot = partition(arr, lo, hi);

    qs(arr, lo, pivot-1);
    qs(arr, pivot+ 1, hi);
}

// get hi as the pivot
function partition(arr: number[], lo: number, hi: number ): number {
    const pivot = arr[hi];
    let idx = lo -1;

    for(let i=lo; i < hi; i++) {
        if(arr[i] <= pivot) {
            idx ++;
            // swap arr[i] with arr[idx]
            const curr = arr[i];
            arr[i] = arr[idx];
            arr[idx] = curr;
        }
    }

    // swap pivot with arr[idx]
    idx++;
    arr[hi] = arr[idx]
    arr[idx] = pivot

    // return new pivot index
    return idx
}


export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);

}
