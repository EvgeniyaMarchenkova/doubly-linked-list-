const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;

    }
    append(data) {
        var newNode= new Node();
        newNode.data = data;

        if (this.length !== 0) {
            this._tail.next = newNode;
            newNode.prev = this._tail;
            this._tail = newNode;
        }
        else  {
            this._tail = newNode;
            this._head = newNode;

        }

        this.length++;
        return this;
    }

    head() {
        if (!this._head) {
            return null;
        }
        return this._head.data;
    }

    tail() {
        if (!this._tail) {
            return null;
        }
        return this._tail.data;
    }

    getNodeByIndex(index) {
        var currentNode = this._head;
        for (var i=0; i<index; i++) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    at(index) {
        return this.getNodeByIndex(index).data;
    }

    insertAt(index, data) {
        var currentNode = this.getNodeByIndex(index);
        if (currentNode) {
            currentNode.data = data;
        }
        else {
            var newNode= new Node();
            newNode.data = data;
        }
        return this;
    }

    isEmpty() {
        if (this.length) {
            return false;
        }
        else {
            return true;
        }
    }

    clear() {
        this.length = 0;
        this._head = null;
        this._tail = null;
        return this;

    }

    deleteAt(index) {
        var currentNode = this.getNodeByIndex(index);
        if (currentNode) {
            var prevNode = currentNode.prev;
            if (prevNode) {
                var nextNode = currentNode.next;
                prevNode.next = nextNode;
                if (nextNode) {
                    nextNode.prev = prevNode;
                }
            }
        }
        return this

    reverse() {
        var node_buf = {
            data: null,
            next: null,
            prev: null
        }

        var node_head = this._head;
        var node_tail = this._tail;

        for  (var i=0; i < this.length / 2; i++) {
            node_buf.data = node_tail.data;
            node_tail.data = node_head.data;
            node_head.data = node_buf.data;
            node_head = node_head.next;
            node_tail = node_tail.prev;
        }
        return this;
    }

    indexOf(data) {
        var currentNode = this._head;
        for  (var i = 0; i < this.length; i++) {
            if (currentNode.data == data) {
                return i;
            }
            currentNode = currentNode.next;
        }
        return -1;
    }
}

module.exports = LinkedList;


