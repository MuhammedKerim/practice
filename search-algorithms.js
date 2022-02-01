/* SEARCH ALGORITHMS */
// 1. Linear Search
// 2. Binary Search
// 3. Jump Search
// 4. Exponential Search
// 5. Ternary Search




/*---------------*/
/* Linear Search */
/*---------------*/
function linearSearch(arr, n, k) {
    for (let i = 0; i < n; i++) {
        if (arr[i] == k) return i + 1;
    }
    return -1;
}

/* Linear Search - two pointers*/
function linearSearchLR(arr, n, k) {
    var left = 0;
    var right = n - 1;

    for (; left <= right; left++, right--) {
        if (arr[left] == k) {
            return left + 1;
        }
        if (arr[right] == k) {
            return right + 1;
        }
    }
    return -1;
}


/*---------------*/
/* Binary Search */
/*---------------*/
function bSearchRecursive(arr, l, r, x) {
    // code here
    if (l > r) {
        return -1;
    }

    var m = Math.floor(l + (r - l) / 2)
    if (arr[m] == x) {
        return m;
    } else if (arr[m] > x) {
        r -= m;
        return bSearchRecursive(arr, l, r, x)
    } else if (arr[m] < x) {
        l = m + 1;
        return bSearchRecursive(arr, l, r, x)
    }

}

function bSearchIterative(arr, l, r, x) {
    // // code here
    while (l <= r) {
        var mid = Math.floor(l + (r - l) / 2)
        console.log(l, r, mid)
        if (arr[mid] == x) {
            return mid
        }

        if (arr[mid] > x) r = mid - 1;

        l = mid + 1;
    }
    return -1;
}


/*---------------*/
/*  Jump Search  */
/*---------------*/
function jumpSearch(arr, x) {
    // initialize vars
    var startBlock = 0;
    var jumpSize = Math.floor(Math.sqrt(arr.length))
    var endBlock = jumpSize;

    // jumb 
    for (let i = 0; i < arr.length;) {
        console.log('i', i)
        // check where the jop is 
        if (arr[i] == x) {
            return i;
        } else if (arr[i] > x) { // the number can be in this block
            // do binary search
            endBlock = i;
            console.log('LINEAR SEARCH ... ')
            for (let j = startBlock; j < endBlock; j++) {
                console.log('j', j)
                if (arr[j] == x) return j;
            }
            // we linearly searched the block and found nothing
            return -1;
        } else if (arr[i] < x) { // continue jumbing    
            // if this is the last element, stop
            if (i == arr.length - 1) return -1;
            // update start block
            startBlock = i;
            // update endblock
            if (i + jumpSize >= arr.length) endBlock = arr.length - 1;
            else endBlock = i + jumpSize; // make the endblock the last element 
            // update the loop index
            if (i + jumpSize >= arr.length) i = arr.length - 1;
            else i += jumpSize;
        }

    }

    return -1;
}

/* geeksforgeeks version */
function jumpSearchGeeks(arr, x, n) {
    // Finding block size to be jumped
    let step = Math.sqrt(n);
    // Finding the block where element is
    // present (if it is present)
    let prev = 0;

    console.log(arr[Math.min(step, n) - 1])
    while (arr[Math.min(step, n) - 1] < x) {
        prev = step;
        step += Math.sqrt(n);
        if (prev >= n)
            return -1;
    }

    // Doing a linear search for x in block
    // beginning with prev.
    while (arr[prev] < x) {
        console.log('prev', prev)
        prev++;

        // If we reached next block or end of
        // array, element is not present.
        if (prev == Math.min(step, n))
            return -1;
    }
    // If element is found
    if (arr[prev] == x)
        return prev;

    return -1;
}

/* Imporved jumpSearch */
function jumpSearchOptimized(arr, x) {

    // check the middle element and decide on the jump left/right
    let n = arr.length;
    let m = Math.floor((n - 1) / 2);

    // initialize vars
    var startBlock;
    var jumpSize = Math.floor(Math.sqrt(n))
    var endBlock;
    endBlock = jumpSize;
    var i;
    if (arr[m] > x) {
        // initialize vars
        startBlock = 0;
        i = 0;
        n = m; // check up to the middle element
    } else if (arr[m] < x) {
        // initialize vars
        startBlock = m + 1;
        i = m + 1;
    }

    // jumb 
    for (i; i < n;) {
        console.log('i', i)
        // check where the jop is 
        if (arr[i] == x) {
            return i;
        } else if (arr[i] > x) { // the number can be in this block
            // do binary search
            endBlock = i;
            console.log('LINEAR SEARCH ... ')
            for (let j = startBlock; j < endBlock; j++) {
                console.log('j', j)
                if (arr[j] == x) return j;
            }
            // we linearly searched the block and found nothing
            return -1;
        } else if (arr[i] < x) { // continue jumbing    
            // if this is the last element, stop
            if (i == n - 1) return -1;
            // update start block
            startBlock = i;
            // update endblock
            if (i + jumpSize >= n) endBlock = n - 1;
            else endBlock = i + jumpSize; // make the endblock the last element 
            // update the loop index
            if (i + jumpSize >= n) i = n - 1;
            else i += jumpSize;
        }

    }

    return -1;
}


/*----------------------*/
/*  Exponential Search  */
/*----------------------*/
function exponentialSearch(arr, n, x) {
    if (arr[0] == x) return 0;
    var i = 1;
    while (arr[i] < x && i < n) {
        i = i * 2;
        console.log(i)
    }
    return bSearchRecursive(arr, i / 2, Math.min(i, n - 1), x)
}


/*----------------------*/
/*  Ternary Search  */
/*----------------------*/
function ternarySearch(arr, l, r, x) {
    let mid1 = Math.floor(l + (r - l) / 3);
    let mid2 = Math.floor(r - (r - l) / 3);
    if (arr[mid1] == x) return mid1;
    else if (arr[mid1] > x) return ternarySearch(arr, l, mid1, x);

    if (arr[mid2] == x) return mid2;
    else if (arr[mid2] > x) return ternarySearch(arr, mid2 + 1, r, x);

    return ternarySearch(arr, l + 1, r, x)
}