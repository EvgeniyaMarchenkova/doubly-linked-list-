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
            newNode.prev=this._tail;
            this._tail = newNode;
        }
        else  {
            this._tail = newNode;
            this._head = newNode;

        }

        this.length++;
        return newNode;
    }

    head() {
        return this._head.data;

    }

    tail() {
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
        currentNode.data=data;
        return currentNode.data;

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

    }

    deleteAt(index) {}

    reverse() {


    }

    indexOf(data) {}
}

module.exports = LinkedList;


