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
        var newNode = new Node(value)
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        var node = this.root;
        while (node) {
            if (value == node.value) return undefined;
            if (value < node.value) {
                if (!node.left) {
                    node.left = newNode;
                    return this;
                }
                node = node.left; // go left
            } else {
                if (!node.right) {
                    node.right = newNode;
                    return this;
                }
                node = node.right;
            }
        }
    }

    find(value) {
        var node = this.root;
        while (node) {
            if (node.value === value) return true;
            else if (value < node.value) node = node.left;
            else node = node.right;
        }
        return false;
    }

    findr(val, node = this.root) {
        if (!node) return false;
        if (val == node.value) return true;
        return this.findr(val, val < node.value ? node.left : node.right);
    }

    traverseBFS() {
        var node = this.root;
        var q = [];
        var visited = [];
        q.push(node)
        while (q.length) {
            node = q.shift();
            visited.push(node.value)
            if (node.left) q.push(node.left)
            if (node.right) q.push(node.right)
        }
        return visited;
    }



    BFS_Rec_PreOrder() {
        var data = [];

        function traverse(node) {
            data.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }

    BFS_Rec_PostOrder() {
        var data = [];

        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root);
        return data;
    }

    BFS_Rec_InOrder() {
        var data = [];

        function traverse(node) {
            if (node.left) traverse(node.left);
            data.push(node.value);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }

    dfsPostOrder(node = this.root, values = []) {
        if (!node) return [];
        if (node.left) this.dfsPostOrder(node.left, values);
        values.push(node.value)
        if (node.right) this.dfsPostOrder(node.right, values);
    }

    print() {
        var node = this.root;
        var body = '';
        while (node) {
            body += node.value;
            if (node.left) {
                node = node.left;
            } else if (node.right) {
                node = node.right
            }
        }
    }
}

var bst = new BinarySearchTree();

bst.insert(10)
bst.insert(6)
bst.insert(3)
bst.insert(8)
bst.insert(15)
bst.insert(20)