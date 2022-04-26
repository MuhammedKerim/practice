class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // enqueue to the end of the queue
    enqueue(value) {
        var newNode = new Node(value)
        if (!this.size) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        this.size++;
        return this.size;
    }

    dequeue() {
        if (!this.size) return null;
        var dequeuedNode = this.first;
        if (this.size == 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
        }
        dequeuedNode.next = null;
        this.size--;
        return dequeuedNode.value;
    }

    print() {
        var node = this.first;
        var body = 'First -> ';
        while (node) {
            var border = '';
            console.log(node.next)
            if (!node.next) {
                border = 'Last --> '
            } else if (node != this.first) {
                border = '-------> '
            }
            body += border + node.value + '\n';
            node = node.next;
        }
        console.log(body)
    }
}

var q = new Queue();
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.print()