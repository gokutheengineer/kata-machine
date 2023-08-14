export default function two_crystal_balls(breaks: boolean[]): number {
    // sqrt
    const jumpAmount = Math.floor(Math.sqrt(breaks.length));

    let end_index = jumpAmount;

    for (; end_index < breaks.length; end_index+= jumpAmount) {
        if (breaks[end_index]) {
            break;
        }
    }
    
    for (let startIndex = end_index - jumpAmount; startIndex <= end_index; startIndex++) {
        if (breaks[startIndex]) {
            return startIndex;
        }
    }

    return -1;
}