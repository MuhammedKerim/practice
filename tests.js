// class Node {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//     }
// }

// class SinglyLinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }
//     push(val) {
//         let newNode = new Node(val);
//         if (!this.head) {
//             this.head = newNode;
//             this.tail = this.head;
//         } else {
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//         this.length++;
//         return this;
//     }

//     get(idx) {
//         if (idx < 0 || idx > this.length - 1) return null;
//         var node = this.head;
//         for (let i = 0; i < idx; i++) {
//             node = node.next;
//         }
//         return node;
//     }

//     rotate(r) {
//         if (Math.abs(r) > this.length) r = r % this.length;
//         if (r < 0) r = this.length + r;
//         console.log(r)
//         var newHead = this.get(r);
//         var newTail = this.get(r - 1)
//         if (!newTail) return;
//         this.tail.next = this.head;
//         this.head = newHead;
//         this.tail = newTail;
//         this.tail.next = null;
//     }

//     print() {
//         var node = this.head;
//         var body = '';
//         while (node) {
//             body += node.val + ' => ';
//             node = node.next;
//         }
//         console.log(body + '|');
//     }

// }

// function sortedFrequency(arr, num, l = 0, r = arr.length - 1) {
//     // add whatever parameters you deem necessary - good luck!!!
//     if (num < arr[0] || num > arr[arr.length - 1]) return -1;

//     if (l == r) return arr[l] === num ? 1 : 0;
//     var m = Math.floor(l + ((r - l) / 2));
//     if (arr[m] < num) {
//         return sortedFrequency(arr, num, m + 1, r);
//     }
//     if (arr[m] > num) {
//         return sortedFrequency(arr, num, l, m - 1);
//     }
//     if (arr[m] == num) {
//         return 1 + sortedFrequency(arr, num, l, m - 1) + sortedFrequency(arr, num, m + 1, r)
//     }
// }


// function findRotatedIndex(arr, num, l = 0, r = arr.length - 1) {
//     // add whatever parameters you deem necessary - good luck!
//     if (l > r) return -1;
//     var m = Math.floor(l + ((r - l) / 2));
//     if (arr[m] == num) return m;

//     var left = arr[l];
//     var right = arr[r];
//     var mid = arr[m];

//     if (left > right && mid > left && mid > right) {
//         if (num > left && num < mid) return findRotatedIndex(arr, num, l, m - 1);
//         if (num < left || num > right) return findRotatedIndex(arr, num, m + 1, r);

//         else return findRotatedIndex(arr, num, l, m - 1);
//     } else if (left > right && left > mid) {
//         if (num >= left) return findRotatedIndex(arr, num, l, m - 1);
//         if (num > mid) return findRotatedIndex(arr, num, m + 1, r);
//         else return findRotatedIndex(arr, num, l, m - 1);
//     } else {
//         if (num > mid && num <= right) return findRotatedIndex(arr, num, m + 1, r);
//         else return findRotatedIndex(arr, num, l, m - 1);
//     }
// }

// // var res = findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)
// // // var res = findRotatedIndex([11, 12, 13, 14, 15, 16, 3, 5, 7, 9], 16)
// // console.log('Res ', res)

// function swap(arr, i, j) {
//     var temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
// }

// function strComp(a, b) {
//     if (a < b) return -1;
//     if (a > b) return 1;
//     return 0;
// }

// function oldestToYoungest(a, b) {
//     return b.age - a.age;
// }

// function bubbleSort(arr, comparator = null) {
//     // add whatever parameters you deem necessary - good luck!
//     if (typeof comparator !== 'function') {
//         comparator = function (a, b) {
//             return a - b;
//         }
//     }
//     var swapFlag = true;
//     for (let i = 0; swapFlag && i < arr.length - 1; i++) {
//         swapFlag = false;
//         for (let j = 0; j < arr.length - 1; j++) {
//             // console.log(arr[j], arr[j + 1])
//             if (comparator(arr[j], arr[j + 1]) > 0) {
//                 // console.log('Swap')
//                 swap(arr, j, j + 1)
//                 swapFlag = true;
//             }
//         }
//     }
//     return arr;

// }

// var kities = ['LilBub', 'Garfield', 'Heathcliff', 'Blue', 'Grumpy']

// var moarKittyData = [{
//     name: 'LilBub',
//     age: 7
// }, {
//     name: 'Garfield',
//     age: 40
// }, {
//     name: 'Heathcliff',
//     age: 45
// }, {
//     name: 'Blue',
//     age: 1
// }, {
//     name: 'Grumpy',
//     age: 6
// }]

// // var res = bubbleSort([0, -10, 7, 4])
// // var res = bubbleSort(kities, strComp)
// // var res = bubbleSort(moarKittyData, oldestToYoungest)
// // console.log('Res ', res)


// function swap(arr, i, j) {
//     var temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
// }

// function selectionSort(arr) {
//     // add whatever parameters you deem necessary - good luck!
//     var min;
//     for (let i = 0; i < arr.length; i++) {
//         min = i;
//         for (let j = i; j < arr.length; j++) {
//             if (arr[min] > arr[j]) min = j;
//         }
//         console.log(i, min)
//         swap(arr, i, min);
//     }
//     return arr;
// }

// // var res = selectionSort([3, 2, 1])
// // console.log('Res ', res)


// function swap(arr, i, j) {
//     var temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
// }

// function insertionSort(arr, comp) {
//     // add whatever parameters you deem necessary - good luck!
//     if (!comp) {
//         comp = (a, b) => {
//             return a - b;
//         }
//     }
//     var i = 0;
//     var j = 0;
//     while (j < arr.length - 1) {
//         j++;
//         var temp = arr[j];
//         while (i >= 0 && comp(temp, arr[i]) < 0) {
//             arr[i + 1] = arr[i];
//             i--;
//         }
//         arr[i + 1] = temp;
//         i = j;
//     }
//     return arr;
// }


// // var res = insertionSort([3, 2, 1])
// // var res = insertionSort(kities, strComp)
// // var res = insertionSort(moarKittyData, oldestToYoungest)
// // console.log('Res ', res)


// var arr1 = [1, 2, 3];
// var arr2 = [4, 5, 6];


// function merge(arr1, arr2, comp) {
//     // add whatever parameters you deem necessary - good luck!
//     if (!comp) {
//         comp = (a, b) => a - b;
//     }
//     var n1 = arr1.length;
//     var n2 = arr2.length;
//     var merged = [];
//     let i = 0;
//     let j = 0;
//     while (1) {
//         if (comp(arr1[i], arr2[j]) < 0) {
//             merged.push(arr1[i]);
//             i++;
//         } else {
//             merged.push(arr2[j]);
//             j++;
//         }

//         if (i == n1) {
//             merged = merged.concat([...arr2.slice(j)]);
//             return merged;
//         }
//         if (j == n2) {
//             merged = merged.concat(...arr1.slice(i));
//             return merged;
//         }
//     }
// }


// function mergeSort(arr, comp = null) {
//     if (arr.length <= 1) return arr;
//     var m = Math.floor(arr.length / 2);
//     var left = mergeSort(arr.slice(0, m), comp);
//     var right = mergeSort(arr.slice(m), comp);
//     return merge(left, right, comp);
// }
// // var res = merge(arr1, arr2);

// function swap(arr, i, j) {
//     [arr[i], arr[j]] = [arr[j], arr[i]];
// }

// function strLength(a, b) {
//     return a.length - b.length;
// }

// function swap(arr, i, j) {
//     [arr[i], arr[j]] = [arr[j], arr[i]];
// }


// function pivot(arr, comparator, start = 0, end = arr.length - 1) {
//     // good luck!
//     if (!comparator) {
//         comparator = (a, b) => a - b;
//     }
//     var pVal = arr[start];
//     var pIdx = start;
//     for (let i = start; i <= end; i++) {
//         if (comparator(pVal, arr[i]) > 0) {
//             pIdx++;
//             swap(arr, pIdx, i);
//         }
//     }
//     swap(arr, pIdx, start);
//     return pIdx;
// }

// function quickSort(arr, comparator = null, l = 0, r = arr.length - 1) {
//     // good luck!
//     if (l >= r) return;
//     var p = pivot(arr, comparator, l, r);
//     quickSort(arr, comparator, l, p)
//     quickSort(arr, comparator, p + 1, r);
//     return arr;
// }



// // var res = quickSort([4, 2, 12, 10, 7, 9]);
// // console.log(res)


// function getDigit(num, i) {
//     // good luck!
//     return Math.floor((num % Math.pow(10, i + 1)) / Math.pow(10, i));
// }

// function digitCount(num) {
//     // good luck!
//     var numOfDigits = 1;
//     var i = 1;
//     while (Math.floor(num / Math.pow(10, i))) {
//         numOfDigits++;
//         i++;
//     }
//     return numOfDigits;
// }


// function mostDigits(nums) {
//     // good luck!
//     var max = 0;
//     nums.forEach((num) => {
//         var d = digitCount(num);
//         if (d > max) max = d;
//     });
//     return max;
// }


// function radixSort(nums) {
//     // good luck!

//     // sort based on 0th digit to max
//     var maxDigits = mostDigits(nums);
//     // 0   1   2   3   4   5   6   7   8   9
//     for (let i = 0; i < maxDigits; i++) {
//         // put each number in the correct bucket
//         var buckets = [
//             [],
//             [],
//             [],
//             [],
//             [],
//             [],
//             [],
//             [],
//             [],
//             []
//         ];
//         for (let j = 0; j < nums.length; j++) {
//             var digitAtJ = getDigit(nums[j], i);
//             buckets[digitAtJ].push(nums[j]);
//         }
//         nums = [].concat(...buckets);
//     }
//     return nums;
// }
// var res = radixSort([10, 100, 1, 1000, 1000000]);

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class Queue {
//     constructor() {
//         this.first = null;
//         this.last = null;
//         this.size = 0;
//     }
//     enqueue(data) {
//         var node = new Node(data);

//         if (!this.first) {
//             this.first = node;
//             this.last = node;
//         } else {
//             this.last.next = node;
//             this.last = node;
//         }

//         return ++this.size;
//     }
//     dequeue() {
//         if (!this.first) return null;

//         var temp = this.first;
//         if (this.first == this.last) {
//             this.last = null;
//         }
//         this.first = this.first.next;
//         this.size--;
//         return temp.value;
//     }
// }


// class Stack {
//     constructor() {
//         this.queue = new Queue();
//     }
//     push(val) {
//         var queue2 = new Queue();
//         queue2.enqueue(val);
//         while (this.queue.size) {
//             queue2.enqueue(this.queue.dequeue());
//         }
//         this.queue = queue2;
//         return this;
//     }
//     pop() {
//         return this.queue.dequeue();
//     }
// }
/*
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val) {
        var newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        this.size++;
        return this.size;
    }
}
*/


/* class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        if (this.root === null) {
            this.root = new Node(value);
            return this;
        } else {
            var current = this.root;
            while (true) {
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = new Node(value);
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if (value > current.value) {
                    if (current.right === null) {
                        current.right = new Node(value);
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }
    depthFirstSearchPreOrder(node = this.root, values = []) {
        if (!node) return values;
        values.push(node.value)
        if (node.left) this.depthFirstSearchPreOrder(node.left, values);
        if (node.right) this.depthFirstSearchPreOrder(node.right, values);
        return values;
    }
    depthFirstSearchInOrder(node = this.root, values = []) {
        if (!node) return values;
        if (node.left) this.depthFirstSearchInOrder(node.left, values);
        values.push(node.value);
        if (node.right) this.depthFirstSearchInOrder(node.right, values);
        return values;
    }
    depthFirstSearchPostOrder(node = this.root, values = []) {
        if (!node) return values;
        if (node.left) this.depthFirstSearchPostOrder(node.left, values);
        if (node.right) this.depthFirstSearchPostOrder(node.right, values);
        values.push(node.value);
        return values;
    }
}

 */

/*
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        if (this.root === null) {
            this.root = new Node(value);
            return this;
        } else {
            var current = this.root;
            while (true) {
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = new Node(value);
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if (value > current.value) {
                    if (current.right === null) {
                        current.right = new Node(value);
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }
    remove(value) {
        if (!this.root) return undefined;
        var node = this.root;
        var parentNode = null;
        var removedNode;
        while (1) {
            // console.log(node)
            if (node.value === value) {
                // CASE 1 - Leaf Node
                removedNode = node;
                if (!node.left && !node.right) {
                    console.log('CASE 1');
                    // console.log('parentNode', parentNode);
                    // console.log('node', node);
                    if (!parentNode) this.root = null; // this is the root
                    else {
                        // either the removed node is a left or right node
                        if (parentNode.left && parentNode.left.value === value) parentNode.left = null;
                        else if (parentNode.right && parentNode.right.value === value) parentNode.right = null;
                    }
                } else if (node.left && node.right) { // CASE 3 - has 2 children
                    // find min from right branch
                    console.log('CASE 3');
                    // console.log('parentNode', parentNode);
                    console.log('To be removed', node);
                    var n = node.right;
                    var prev = node;
                    if (n.left) {
                        while (n.left) {
                            prev = n;
                            n = n.left;
                        }
                        console.log('prev1', prev) // 50
                        console.log('replace with: ', n) // 60
                        console.log('parentNode', parentNode) // 20
                        // prev.right = null; // remove connection with moved node
                        if (n.right) prev.left = n.right;
                        if (parentNode.left && parentNode.left.value == value) {
                            n.left = parentNode.left.left;
                            n.right = parentNode.left.right;
                            parentNode.left = n;
                        } else if (parentNode.right && parentNode.right.value == value) {
                            n.left = parentNode.right.left;
                            n.right = parentNode.right.right;
                            parentNode.right = n;
                        }
                    } else {
                        console.log('prev', prev) // 50
                        console.log('replace with: ', n) // 60
                        console.log('parentNode', parentNode) // 20
                        prev.right = null; // remove connection with moved node
                        n.left = prev.left;
                        if (parentNode.left && parentNode.left.value == value) parentNode.left = n;
                        else if (parentNode.right && parentNode.right.value == value) parentNode.right = n;
                    }


                    return removedNode;
                } else { // CASE 2 - has one child
                    console.log('CASE 2');
                    // console.log('parentNode', parentNode);
                    // console.log('node', node);
                    var nextNode = node.left ? node.left : node.right;
                    if (parentNode.left && parentNode.left.value == value) {
                        parentNode.left = nextNode;
                        if (node.value === this.root.value) this.root = node.left;
                    } else if (parentNode.right && parentNode.right.value == value) {
                        parentNode.right = nextNode;
                        if (node.value === this.root.value) this.root = node.right;
                    }

                }
                return removedNode;
            } else if (node.value < value) {
                parentNode = node;
                node = node.right;
            } else {
                parentNode = node;
                node = node.left;
            }
        }

        return node;
    }
}
*/
/*

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        // only accept numbers....watch out since NaN is typeof number!
        if (typeof value === 'number' && !isNaN(value)) {
            // if there is nothing in the tree, start it off with a new node!
            if (this.root === null) {
                this.root = new Node(value);
                return this;
            } else {
                // current variable used for traversal, just like linked lists!
                var current = this.root;
                // keep looping till we get to the correct spot;
                while (true) {
                    if (value < current.value) {
                        // if there is nothing on the left
                        if (current.left === null) {
                            // make a new node and get out
                            current.left = new Node(value);
                            return this;
                        }
                        // otherwise, keep moving on!
                        else {
                            current = current.left;
                        }
                    } else if (value > current.value) {
                        // if there is nothing on the right
                        if (current.right === null) {
                            // make a new node and get out
                            current.right = new Node(value);
                            return this;
                        } else {
                            current = current.right;
                        }
                    }
                    // otherwise it must be a duplicate so let's get out of here
                    else {
                        return "duplicate!";
                    }
                }
            }
        } else
            return "Please insert a number";
    }
    findSecondLargest() {
        var n;

        // case 1: 
        if (!this.root) return undefined;

        // case 2:
        if (!this.root.left && !this.root.right) return undefined;

        // case 3: 
        if (this.root.left && !this.root.right) {
            console.log('case 3')
            n = this.root.left;
            if (n.right) {
                while (n.right) {
                    n = n.right;
                }
                return n;
            } else {
                return n;
            }
        }

        // case 4:
        if (this.root.right) {
            console.log('case 4')
            var prev = this.root;
            n = this.root.right;
            if (n.right) {
                while (n.right) {
                    prev = n;
                    n = n.right
                }
                if (prev.left) {
                    n = prev.left;
                    while (n.right) {
                        n = n.right
                    }
                    return n;
                } else {
                    return prev;
                }
            } else {
                return prev;
            }
        }

    }
}

*/


// var bst = new BinarySearchTree();
// bst.insert(15)
// bst.insert(20)
// bst.insert(10)
// bst.insert(12)
// bst.insert(1)
// bst.insert(5)
// bst.insert(50)
// bst.insert(60)
// bst.insert(30)
// bst.insert(25)
// bst.insert(23)
// bst.insert(24)
// bst.insert(70)

// console.log(bst.remove(10))
// console.log('*******************')
// console.log(bst.remove(50))
// // console.log(bst.remove(5))

// var bst = new BinarySearchTree();
// bst.insert(22)
// bst.insert(49)
// bst.insert(85)
// bst.insert(66)
// bst.insert(95)
// bst.insert(90)
// bst.insert(100)
// bst.insert(88)
// bst.insert(93)
// bst.insert(89)

/*
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        // only accept numbers....watch out since NaN is typeof number!
        if (typeof value === 'number' && !isNaN(value)) {
            // if there is nothing in the tree, start it off with a new node!
            if (this.root === null) {
                this.root = new Node(value);
                return this;
            } else {
                // current variable used for traversal, just like linked lists!
                var current = this.root;
                // keep looping till we get to the correct spot;
                while (true) {
                    if (value < current.value) {
                        // if there is nothing on the left
                        if (current.left === null) {
                            // make a new node and get out
                            current.left = new Node(value);
                            return this;
                        }
                        // otherwise, keep moving on!
                        else {
                            current = current.left;
                        }
                    } else if (value > current.value) {
                        // if there is nothing on the right
                        if (current.right === null) {
                            // make a new node and get out
                            current.right = new Node(value);
                            return this;
                        } else {
                            current = current.right;
                        }
                    }
                    // otherwise it must be a duplicate so let's get out of here
                    else {
                        return "duplicate!";
                    }
                }
            }
        } else return "Please insert a number";
    }
    isBalanced() {
        if (!this.root) return true;
        var rL = this.getHeight(this.root.left);
        var rR = this.getHeight(this.root.right);
        // console.log(rL, rR)
        if (rL.isBalanced && rR.isBalanced) {
            if (Math.abs(rL.height - rR.height) <= 1) return true;
        }
        return false;
    }

    getHeight(node) {
        // console.log('getHeight', node)
        if (!node) return {
            height: -1,
            isBalanced: true
        };
        var heightLeft = this.getHeight(node.left);
        var heightRight = this.getHeight(node.right);
        var resp = {
            height: Math.max(heightLeft.height, heightRight.height) + 1,
            isBalanced: Math.abs(heightLeft.height - heightRight.height) <= 1
        };
        return resp;
    }
}
*/
/*

class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }
    insert(val) {
        // left node = 2n+1
        // right node = 2n+2
        // push new added node 
        this.values.push(val);
        // loop through the array 
        for (let i = this.values.length - 1; i >= 0; i--) {
            // swap if node is bigger than parent
            var parentIndex = Math.floor((i - 1) / 2);
            if (this.values[i] > this.values[parentIndex]) {
                [this.values[i], this.values[parentIndex]] = [this.values[parentIndex], this.values[i]];
            }
        }
        return this.values;
    }
    extractMax() {
        // max is first node
        // get its left and right children
        // put value of larger in the parent
        if (!this.values.length) return null;
        for (let i = 0; i < this.values.length;) {
            var leftNode = this.values[2 * i + 1] || -Infinity;
            var rightNode = this.values[2 * i + 2] || -Infinity;
            console.log(i, leftNode, rightNode)
            if (leftNode > rightNode) {
                this.values[i] = leftNode;
                i = 2 * i + 1;
            } else {
                this.values[i] = rightNode;
                i = 2 * i + 2;
            }
        }
        this.values.pop();
        return this.values;
    }
}

var h = new MaxBinaryHeap();
h.insert(1)
h.insert(2)
h.insert(3)
h.insert(4)
h.insert(5)
h.insert(6)
// console.log(h.values)
console.log('*******************')
// console.log(bst.remove(50))

*/


/* class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
    removeEdge(vertex1, vertex2) {
        var n1 = this.adjacencyList[vertex1];
        var temp = [];
        for (let i = 0; i < n1.length; i++) {
            if (n1[i] !== vertex1) temp.push(n1[i]);
        }
        this.adjacencyList[vertex1] = temp;
        temp = [];
        var n2 = this.adjacencyList[vertex2];
        for (let j = 0; j < n2.length; j++) {
            if (n2[j] !== vertex2) temp.push(n2[j]);
        }
        this.adjacencyList[vertex2] = temp;
    }
    removeVertex(vertex) {
        var neighbors = this.adjacencyList[vertex];
        for (let i = 0; i < neighbors.length; i++) {
            this.removeEdge(vertex, neighbors[i]);
        }
        delete this.adjacencyList[vertex];
    }
}
 */
/*
class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }

    depthFirstSearch(start, visited = []) {
        if (visited.includes(start)) return;
        visited.push(start);
        var neighbors = this.adjacencyList[start];
        for (let i = 0; i < neighbors.length; i++) this.depthFirstSearch(neighbors[i], visited);
        return visited;
    }
}
*/
/*
class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }
    breadthFirstSearch(s) {
        var q = [s];
        var visited = [s];
        while (q.length) {
            var node = q.shift();
            if (!visited.includes(node)) visited.push(node);
            var neighbors = this.adjacencyList[node];
            for (let i = 0; i < neighbors.length; i++) {
                if (!visited.includes(neighbors[i]))
                    q.push(neighbors[i]);
            }
        }
        return visited;
    }
}
*/

/*
class WeightedGraph extends Graph {
    dijkstra(start, finish) {
        const nodes = new PriorityQueue();
        var distances = {};
        var visited = [];
        var previous = {};
        var vertexes = Object.keys(this.adjacencyList)
        for (let i = 0; i < vertexes.length; i++) {

            if (vertexes[i] === start) {
                nodes.enqueue(start, 0);
                distances[start] = 0;
            } else {
                distances[vertexes[i]] = Infinity;
                nodes.enqueue(vertexes[i], Infinity)
            }
            previous[vertexes[i]] = null;
        }

        // start looping while vertex is not visited
        while (nodes.values.length) {
            var smallest = nodes.dequeue().val;
            if (smallest === finish) {
                console.log('DONE!')
                var path = [];
                while (previous[smallest]) {
                    path.push(smallest)
                    smallest = previous[smallest];
                }
                path.push(start);
                return path.reverse();
            }

            if (smallest || distances[smallest] !== Infinity) {
                // find neighbors of smallest
                for (let n in this.adjacencyList[smallest]) {
                    var nextNode = this.adjacencyList[smallest][n]
                    //  calculate distance to neighboring nodes
                    let candidateDistance = distances[smallest] + nextNode.weight;
                    // is reaching the nextNode better from this node?
                    if (candidateDistance < distances[nextNode.node]) {
                        // update the distance to reach nextNode    
                        distances[nextNode.node] = candidateDistance;
                        // update the path to nextNode
                        previous[nextNode.node] = smallest;
                        // enqueue in priority q with a new priority
                        nodes.enqueue(nextNode.node, candidateDistance);
                    }
                }

            }
        }
    }
}
*/
/*** 
 *** Use Graph as a constructor for WeightedGraph to inherit from! 
 ***
 ***/
/*
function Graph() {
    this.adjacencyList = {};
}

Graph.prototype.numEdges = function () {
    let total = 0;

    Object.values(this.adjacencyList).forEach(list => {
        total += list.length;
    });

    // note that we've double-counted up til now since we've looked at
    // the adjacencyList for every node.
    return total / 2;
};

Graph.prototype.addVertex = function (vertex) {
    this.adjacencyList[vertex] = [];
};

Graph.prototype.addEdge = function (vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({
        node: vertex2,
        weight
    });
    this.adjacencyList[vertex2].push({
        node: vertex1,
        weight
    });
};

Graph.prototype.removeVertex = function (vertex) {
    while (this.adjacencyList[vertex].length) {
        const adjacentVertex = this.adjacencyList[vertex].pop();
        this.removeEdge(adjacentVertex, vertex);
    }
    delete this.adjacencyList[vertex];
};

Graph.prototype.removeEdge = function (vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        v => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        v => v !== vertex1
    );
};
*/
/*** 
 *** Use the following as a PriorityQueue (it's a min heap)!  
 ***
 ***/
/*
class PriorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(val, priority) {
        this.values.push({
            val,
            priority
        });
        this.sort();
    }
    dequeue() {
        return this.values.shift();
    }
    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    }
}

var g = new WeightedGraph();
g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')

g.addEdge('A', 'B', 4)
g.addEdge('A', 'C', 2)
g.addEdge('B', 'E', 3)
g.addEdge('C', 'D', 2)
g.addEdge('C', 'F', 4)
g.addEdge('D', 'E', 3)
g.addEdge('D', 'F', 1)
g.addEdge('E', 'F', 1)

console.log(g.dijkstra('A', 'E'))

*/
/* 
function solve(coins, value) {
    // the fill() method fills all the elements of an array from a start index to an end index
    // with a static value. Work up to ES6.
    let ways = Array(value + 1).fill(0);

    // set the first way to 1 because its 0 and there is 1 way to make 0 with 0 coins
    ways[0] = 1;

    for (let i = 0; i < coins.length; i++) {
        // get number of ways to all numbers up to that number
        for (let j = 0; j < ways.length; j++) {
            if (coins[i] <= j) {
                ways[j] = ways[j - coins[i]] + ways[j];
            }
        }
    }
    return ways.pop();

}

function constructNote(message, letters) {
    // add whatever parameters you deem necessary - good luck!
    console.log(message, letters)
    if (!message.length) return true;
    if (!letters.length) return false;
    var letter = message[0];
    var letterIdx = letters.indexOf(letter);
    if (letterIdx !== -1) {
        letters = letters.slice(0, letterIdx) + letters.slice(letterIdx + 1);
        return constructNote(message.slice(1), letters);
    } else {
        return false;
    }

}


function findAllDuplicates(arr) {
    // add whatever parameters you deem necessary - good luck!
    var visited = {};
    var duplicates = [];
    for (let i = 0; i < arr.length; i++) {
        if (!visited[arr[i]]) {
            visited[arr[i]] = 1;
        } else
        if (!duplicates.includes(arr[i])) duplicates.push(arr[i]);
    }
    return duplicates;
}
 */


/* function findPair(arr, n) {
    var needed = [];
    for (let i = 0; i < arr.length; i++) {
        console.log(needed)

        if (!needed.includes(n - arr[i]) && !needed.includes(arr[i] - n)) {
            console.log(n - arr[i])
            console.log(arr[i] - n)
            needed.push(n - arr[i]);
            needed.push(arr[i] - n);
        }
        if (needed.includes(arr[i])) {
            return true;
        }
    }
    return false;
} */


/*
class Trie {
    constructor() {
        this.characters = {};
        this.isWord = false;
    }
    addWord(word, index = 0) {
        if (index === word.length) {
            this.isWord = true;
        } else if (index < word.length) {
            let char = word[index];
            let subTrie = this.characters[char] || new Trie();
            subTrie.addWord(word, index + 1);
            this.characters[char] = subTrie;
        }
        return this;
    }
}
*/
class Trie {
    constructor() {
        this.characters = {};
        this.isWord = false;
    }
    addWord(word, index = 0) {
        if (index === word.length) {
            this.isWord = true;
        } else if (index < word.length) {
            var char = word[index];
            var subTrie = this.characters[char] || new Trie();
            subTrie.addWord(word, index + 1);
            this.characters[char] = subTrie;
        }
        return this;
    }
    getWords(words = [], currentWord = "") {
        if (this.isWord) {
            words.push(currentWord);
        }
        for (var char in this.characters) {
            console.log('----> ', char, ' <----')
            var nextWord = currentWord + char;
            console.log(nextWord)
            this.characters[char].getWords(words, nextWord);
        }
        return words;
    }
}

var trie = new Trie();
trie.addWord('ME')
trie.addWord('HAT')
trie.addWord('HAVE')
console.log(trie.getWords());
// console.log(findPair([-4, 4], 8))