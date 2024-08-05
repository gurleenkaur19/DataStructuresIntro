// create a class called LinkedList. It should have a head and tail property. It should have an instance method called append that will append to the linked list a node instance. Also a property called  insertAt that will insert a node at a given index

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  insertAt(value, index) {
    const newNode = new Node(value);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      if (!this.tail) {
        this.tail = newNode;
      }
      return;
    }

    let current = this.head;
    let previous = null;
    let currentIndex = 0;

    while (current && currentIndex < index) {
      previous = current;
      current = current.next;
      currentIndex++;
    }

    if (previous) {
      previous.next = newNode;
      newNode.next = current;
      if (!current) {
        this.tail = newNode;
      }
    }
  }
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.insertAt(4, 1); // Inserts 4 at index 1
console.log(JSON.stringify(list, null, 2));
