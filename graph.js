class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex])
            this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push(vertex2)
            this.adjacencyList[vertex2].push(vertex1)
        }
    }

    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v != vertex2)
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v != vertex1)
        }
    }

    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjVertex)
        }
        delete this.adjacencyList[vertex];
    }

    depthFirstSearch_DFS(vertex) {
        var visited = {};
        var result = [];
        var adjList = this.adjacencyList;
        (function helper(vertex) {
            if (!vertex) return;
            visited[vertex] = true;
            result.push(vertex);
            for (let i = 0; i < adjList[vertex].length; i++) {
                const adjVertex = adjList[vertex][i];
                if (!visited[adjVertex])
                    helper(adjVertex)
            }
        })(vertex)
        return result;
    }

    depthFirstSearch_DFS2(vertex) {
        var visited = {};
        var result = [];
        var stack = [];
        var v;
        stack.push(vertex);
        visited[vertex] = true;
        while (stack.length) {
            // console.log(stack)
            v = stack.pop();
            result.push(v);
            for (let i = 0; i < this.adjacencyList[v].length; i++) {
                const adjVertex = this.adjacencyList[v][i];
                if (!visited[adjVertex]) {
                    stack.push(adjVertex)
                    visited[adjVertex] = true;
                }

            }
        }
        return result;
    }

    breathFirstSearch(vertex) {
        var visited = {};
        var result = [];
        var queue = [];
        var v;
        visited[vertex] = true;
        queue.push(vertex);
        while (queue.length) {
            v = queue.shift();
            result.push(v);
            this.adjacencyList[v].forEach(n => {
                if (!visited[n]) {
                    visited[n] = true;
                    queue.push(n)
                }
            });
        }
        return result;
    }
}

// var g = new Graph();
// g.addVertex('A')
// g.addVertex('B')
// g.addVertex('C')
// g.addVertex('D')
// g.addVertex('E')
// g.addVertex('F')

// g.addEdge('A', 'B')
// g.addEdge('A', 'C')
// g.addEdge('B', 'D')
// g.addEdge('C', 'E')
// g.addEdge('D', 'E')
// g.addEdge('D', 'F')
// g.addEdge('E', 'F')

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({
            node: vertex2,
            weight
        });
        this.adjacencyList[vertex2].push({
            node: vertex1,
            weight
        })
    }

    dijkstra(start, finish) {
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let path = [];
        let smallest;

        // build up initial state
        for (let vertex in this.adjacencyList) {
            if (vertex == start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0)
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity)
            }
            previous[vertex] = null;
        }

        // as long as there are nodes to visit
        while (nodes.values.length) {
            smallest = nodes.dequeue().val;
            if (smallest === finish) {
                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                path.push('A')
                path.reverse();
                return path;
            }

            if (smallest || distances[smallest] !== Infinity) {
                for (let neighbor in this.adjacencyList[smallest]) {
                    // find neighboring node
                    let nextNode = this.adjacencyList[smallest][neighbor]

                    // calculate new distance 
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node
                    if (candidate < distances[nextNeighbor]) {
                        // updating new smallest dist to neigh
                        distances[nextNeighbor] = candidate;
                        // updating prev - how we go to neigh
                        previous[nextNeighbor] = smallest;
                        // enqueue in priority queue 
                        nodes.enqueue(nextNeighbor, candidate)
                    }
                }
            }

        }
    }
}


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
            } else if (right && this.values[n].priority > right.priority && (right.priority < left.priority || !left)) {
                [this.values[n], this.values[2 * n + 2]] = [this.values[2 * n + 2], this.values[n]]
                n = 2 * n + 2;
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

g.dijkstra('A', 'E');