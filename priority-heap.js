class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        var newNode = new Node(val, priority);
        this.values.push(newNode);
        var n = this.values.length - 1;
        var parentIndex = Math.floor((n - 1) / 2);
        while (parentIndex >= 0 && newNode.priority < this.values[parentIndex].priority) {
            [this.values[n], this.values[parentIndex]] = [this.values[parentIndex], this.values[n]];
            n = parentIndex;
            parentIndex = Math.floor((n - 1) / 2);
        }
    }

    dequeue() {
        if (this.values.length == 1) return this.values.pop();
        var removed = this.values[0];
        this.values[0] = this.values.pop()
        var n = 0;
        while (n < this.values.length) {
            var l = this.values.length;
            var left = 2 * n + 1 < l ? this.values[2 * n + 1] : null;
            var right = 2 * n + 2 < l ? this.values[2 * n + 2] : null;
            if (!left && !right) return removed;
            if (left && this.values[n].priority > left.priority && (left.priority < right.priority || !right)) {
                [this.values[n], this.values[2 * n + 1]] = [this.values[2 * n + 1], this.values[n]]
                n = 2 * n + 1;
                console.log('L', this.values)
            } else if (right && this.values[n].priority > right.priority && (right.priority < left.priority || !left)) {
                [this.values[n], this.values[2 * n + 2]] = [this.values[2 * n + 2], this.values[n]]
                n = 2 * n + 2;
                console.log('R')
            } else {
                return removed
            }
        }
        return removed;
    }
}


class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}


var pq = new PriorityQueue();
pq.enqueue('gunshot wound', 1)
pq.enqueue('broken arm', 2)
pq.enqueue('high fever', 4)
pq.enqueue('common cold', 5)
pq.enqueue('glass in foot', 3)