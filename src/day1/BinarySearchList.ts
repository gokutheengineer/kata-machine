export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0; 
    let hi = haystack.length;
    
    do {
        const med = Math.floor(lo + (hi - lo) / 2);
        const value = haystack[med];

        if (value === needle) {
            return true;
        } else if (value < needle) {
            lo = med + 1
        } else {
            hi = med -1
        }
    } while (lo < hi);
    
    return false;
}