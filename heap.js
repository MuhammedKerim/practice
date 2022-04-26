class MaxBinaryHeap {
    constructor() {
        // this.values = [41, 39, 33, 18, 27, 12];
        this.values = [];
    }

    insert(val) {
        this.values.push(val);
        var n = this.values.length - 1;
        var parentIndex = Math.floor((n - 1) / 2);
        while (val > this.values[parentIndex] && parentIndex >= 0) {
            [this.values[parentIndex], this.values[n]] = [this.values[n], this.values[parentIndex]];
            n = parentIndex;
            parentIndex = Math.floor((n - 1) / 2);
        }
        return this.values;
    }

    extractMax() {
        if (this.values.length == 1) return this.values[0];
        var removed = this.values[0];
        this.values[0] = this.values.pop()
        var n = 0;
        while (1) {
            var l = this.values.length;
            var left = 2 * n + 1 < l ? this.values[2 * n + 1] : null;
            var right = 2 * n + 2 < l ? this.values[2 * n + 2] : null;
            if (!left && !right) return removed
            if (this.values[n] < left && left > right) {
                [this.values[n], this.values[2 * n + 1]] = [this.values[2 * n + 1], this.values[n]]
                n = 2 * n + 1;
            } else if (this.values[n] < right && right > left) {
                [this.values[n], this.values[2 * n + 2]] = [this.values[2 * n + 2], this.values[n]]
                n = 2 * n + 2;
            }
        }
        return removed;
    }
}

var maxHeap = new MaxBinaryHeap();