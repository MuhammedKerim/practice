class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // push to the top of the stack
    push(value) {
        var newNode = new Node(value);
        if (!this.size) {
            this.first = newNode;
            this.last = newNode;
        } else {
            var nodeAtTop = this.first;
            newNode.next = nodeAtTop;
            this.first = newNode
        }
        this.size++;
        return this.size;
    }

    pop() {
        if (!this.size) return null;
        var poppedNode = this.first;
        if (this.size == 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;;
        }
        poppedNode.next = null;
        this.size--;
        return poppedNode.value;
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

var stack = new Stack();
stack.push(1)
stack.push(2)
stack.push(3)
stack.print()