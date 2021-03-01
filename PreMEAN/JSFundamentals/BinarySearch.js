function binarySearch(arr, n) {
    var low = 0,
        high = arr.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const guess = arr[mid];
        if (guess === n) {
            return mid
        }
        if (guess > n) {
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }
    return -1;
}