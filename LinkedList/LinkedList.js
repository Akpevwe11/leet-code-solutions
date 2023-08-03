import { Node } from "./Node";

class LinkedList {
    constructor(value) {
        const newNode = new Node(value); 
        this.head = newNode 
        this.tail = this.head
        this.length = 1; 
    }
}

let myLinkedList = new LinkedList(4); 

console.log(myLinkedList); 