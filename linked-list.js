/* Linked Lists */
/*
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        var node = new Node(val)
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop() {
        var node = this.head;
        if (!node) return undefined;

        var prev = null;
        while (node.next) {
            prev = node;
            node = node.next;
        }

        var removedValue = this.tail.val
        prev ? prev.next = null : this.head = null;
        this.tail = prev;
        this.length--;
        return removedValue;
    }

    shift() {
        var oldHead = this.head;
        if (!oldHead) return;
        this.head = this.head.next;
        this.length--;
        if (!this.length) this.tail = this.head;
        return oldHead.val;
    }

    unshift(val) {
        var oldHead = this.head;
        var newNode = new Node(val);
        this.head = newNode;
        if (!oldHead) {
            this.tail = newNode;
        } else {
            newNode.next = oldHead;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index > this.length - 1) {
            return undefined;
        }
        var i = 0;
        var currentNode = this.head;
        while (i !== index) {
            i++;
            currentNode = currentNode.next
        }

        if (i == index) {
            return currentNode ? currentNode : undefined;
        }
    }

    set(index, val) {
        var node = this.get(index);
        if (node) {
            node.val = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        var newNode = new Node(val);
        // first element
        if (index == 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else if (index == this.length) {
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            var nodeBefore = this.get(index - 1);
            newNode.next = nodeBefore.next;
            nodeBefore.next = newNode;
        }
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index > this.length - 1) return false;
        if (index == 0) {
            this.shift();
        } else if (index == this.length - 1) {
            this.pop();
        } else {
            var prev = this.get(index - 1);
            prev.next = prev.next.next;
            this.length--;
        }
        return ll;
    }

    reverse() {
        if (this.length == 0 || this.length == 1) return;
        var prevNode = this.head;
        var currentNode = this.head.next;
        this.tail = this.head;
        this.tail.next = null;
        while (currentNode) {
            var oldNext = currentNode.next
            currentNode.next = prevNode;

            // update iterators
            prevNode = currentNode;
            if (!oldNext) this.head = currentNode;
            currentNode = oldNext;
        }
        this.print()
    }

    print() {
        var currentNode = this.head;
        var body = '(';
        while (currentNode) {
            body += currentNode.val + ') ----> ('
            currentNode = currentNode.next;
        }
        body += '!'
        console.log(body)
    }
}
var ll = new SinglyLinkedList();

// ll.push(1)
// ll.push(2)
// ll.push(3)
// ll.print()
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    // create a node
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      // set next of the node at the tail to newnode
      this.tail.next = newNode;
      // set prev of newnode to the node at the tail
      newNode.prev = this.tail;
      // set tail to newnode
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    // check length
    if (!this.length) return undefined;
    var poppedNoed = this.tail;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNoed.prev;
      poppedNoed.prev.next = null;

      poppedNoed.next = null;
      poppedNoed.prev = null;
    }
    this.length--;
    return poppedNoed;
  }

  shift() {
    // check edges
    if (!this.length) return this;
    var nodeAtHead = this.head;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = nodeAtHead.next;
      this.head.prev = null;
    }
    nodeAtHead.next = null;
    this.length--;
    return nodeAtHead;
  }


  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      var nodeAtHead = this.head;
      nodeAtHead.prev = newNode;
      this.head = newNode;
      this.head.next = nodeAtHead;
    }
    this.length++;
    // this.print()
    // return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    // check to where index is closer
    if (index <= this.length / 2) {
      console.log('LEFT')
      var currentNode = this.head;
      var l = 0;
      while (currentNode) {
        if (l == index) {
          return currentNode;
        }
        currentNode = currentNode.next;
        l++;
      }
    } else {
      console.log('RIGHT')
      var r = this.length - 1;
      var currentNode = this.tail;
      while (currentNode) {
        if (r == index) {
          return currentNode;
        }
        currentNode = currentNode.prev;
        r--;
      }
    }
  }

  set(index, val) {
    var foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;

    if (index == 0) {
      return this.unshift(val)
    } else if (index == this.length) {
      return this.push(val);
    } else {
      var newNode = new Node(val);
      var nodeBefore = this.get(index - 1);
      var nodeAfter = nodeBefore.next;
      newNode.next = nodeAfter;
      nodeBefore.next = newNode;
      nodeAfter.prev = newNode;
      newNode.prev = nodeBefore;
      this.length++;
    }
    this.print();
  }

  remove(index) {
    if (index < 0 || index > this.length - 1) return undefined;

    if (index == 0) return this.shift();
    if (index == this.length - 1) return this.pop();

    var prevNode = this.get(index - 1);
    var targetNode = prevNode.next;
    var nextNode = targetNode.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    targetNode.prev = null;
    targetNode.next = null;

    this.length--;

    return targetNode;
  }

  print() {
    var node = this.head;
    var body = ''
    while (node) {
      body += '(' + node.val + ') ----> '
      node = node.next;
    }
    body += '(!'
    console.log(body)
  }
}

var dll = new DoublyLinkedList()
dll.push(0)
dll.push(1)
dll.push(2)
dll.push(4)
dll.push(5)
dll.print()