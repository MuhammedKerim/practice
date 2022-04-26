/* SORT ALGORITHMS */
// 1. Selection Sort 


/*----------------*/
/* Selection Sort */
/*----------------*/
function selectionSort(arr, n) {
    if (n == 0) return arr;
    var sortedPtr = 0;
    var minIndex = 0;
    for (; sortedPtr < n; sortedPtr++) {
        minIndex = sortedPtr;
        for (let j = sortedPtr; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) minIndex = j;
        }
        swap(arr, sortedPtr, minIndex)
    }
    return arr;
}

function swap(arr, xptr, yptr) {
    var temp = arr[xptr];
    arr[xptr] = arr[yptr]
    arr[yptr] = temp;
}

// var res = selectionSort([2, 32, -1], 3)
// console.log(res)


/*----------------*/
/* Bubble Sort */
/*----------------*/
function bubbleSort(arr, n) {
    var swapFlag = true;

    // loop through arr n times
    for (let i = 0; i < n - 1 && swapFlag; i++) {
        swapFlag = false;
        // make swaps
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1)
                swapFlag = true;
            }

        }
    }

    return arr;
}

// var res = bubbleSort([2, 32, -1, -10, 200, -1, 300, 400, -100], 9)
// console.log(res)


/*----------------*/
/* Insertion Sort */
/*----------------*/
function insertionSort(arr, n) {
    for (let i = 1; i < n; i++) {
        const key = arr[i];
        var j = i - 1;
        while (j >= 0 && key < arr[j]) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}

// var res = insertionSort([3, 2, 5, 1], 4)
// console.log(res)

// function merge(arr, l, m, r) {
//     var n1 = m - l + 1;
//     var n2 = r - m;

//     var leftArr = new Array(n1)
//     var rightArr = new Array(n2)

//     for (var i = 0; i < n1; i++) leftArr[i] = arr[l + i]
//     for (var j = 0; j < n2; j++) rightArr[j] = arr[m + 1 + j]
//     i = 0;
//     j = 0;
//     var k = l;
//     while (i < n1 && j < n2) {
//         if (leftArr[i] <= rightArr[j]) {
//             arr[k] = leftArr[i]
//             i++;
//         } else {
//             arr[k] = rightArr[j]
//             j++;
//         }
//         k++;
//     }

//     while (i < n1) {
//         arr[k] = leftArr[i];
//         i++;
//         k++;
//     }

//     while (j < n2) {
//         arr[k] = rightArr[j];
//         j++;
//         k++;
//     }
// }


// function mergeSort(arr, l, r) {
//     if (l >= r) return;
//     var m = l + parseInt((r - l) / 2)
//     mergeSort(arr, l, m)
//     mergeSort(arr, m + 1, r)
//     merge(arr, l, m, r)
// }


function merge(arr, l, m, r) {
    // set two arrays
    var n1 = m - l + 1;
    var n2 = r - m

    var L = new Array(n1);
    var R = new Array(n2);

    for (let i = 0; i < n1; i++) L[i] = arr[l + i];
    for (let j = 0; j < n2; j++) R[j] = arr[m + 1 + j];

    i = 0;
    j = 0;
    var k = l;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

function mergeSort(arr, l, r) {
    if (l >= r) return;
    var m = l + parseInt((r - l) / 2);

    mergeSort(arr, l, m)
    mergeSort(arr, m + 1, r)
    merge(arr, l, m, r)
}

// var arr = [2, 3, 4, 51, 12, 3, 4, 1, 0]
// mergeSort(arr, 0, 8)
// console.log(arr)

function partition(arr, l, r) {
    var pivot = arr[r];
    let i = l - 1; //last Lower Index
    for (let j = l; j <= r - 1; j++) {
        // console.log(pivot, l, r, i, j)
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j)
        }
    }
    swap(arr, i + 1, r)

    return i + 1;
}


function quickSort(arr, l, r) {
    if (l < r) {
        var p = partition(arr, l, r);
        console.log(l, r, p)
        quickSort(arr, l, p - 1)
        quickSort(arr, p + 1, r)
    }
}

// var arr = [5, 4, 3, 2, 10, 1, 6]
// quickSort(arr, 0, arr.length - 1)
// console.log(arr)


function countSort(arr, n, exp) {

    // get counts
    var countsArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var outputsArr = [];
    for (let i = 0; i < arr.length; i++) {
        outputsArr[i] = 0;
    }


    // get counts of numbers
    for (let i = 0; i < arr.length; i++) {
        countsArr[Math.floor(arr[i] / exp) % 10]++;
    }

    // sum previous counts
    for (let j = 1; j < countsArr.length; j++) {
        countsArr[j] += countsArr[j - 1];
    }

    for (let j = arr.length - 1; j >= 0; j--) {
        outputsArr[countsArr[Math.floor(arr[j] / exp) % 10] - 1] = arr[j];
        --countsArr[Math.floor(arr[j] / exp) % 10];
    }

    // Copy the output array to arr[], so that arr[] now
    // contains sorted numbers according to current digit
    for (let i = 0; i < n; i++)
        arr[i] = outputsArr[i];

    return;
}

// countingSort([1, 4, 1, 2, 7, 5, 2])
function getMax(arr, n) {
    let mx = arr[0];
    for (let i = 1; i < n; i++)
        if (arr[i] > mx)
            mx = arr[i];
    return mx;
}


function radixsort(arr, n) {
    // Find the maximum number to know number of digits
    let m = getMax(arr, n);

    // Do counting sort for every digit. Note that
    // instead of passing digit number, exp is passed.
    // exp is 10^i where i is current digit number
    for (let exp = 1; Math.floor(m / exp) > 0; exp *= 10)
        countSort(arr, n, exp);
}
let arr = [170, 45, 75, 90, 802, 24, 2, 66];
let n = arr.length;
radixsort(arr, n)