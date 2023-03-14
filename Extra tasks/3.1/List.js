/* eslint-disable no-undef */
class List {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
  }

  addNode(value, i) {
    const newNode = new Node(value);
    if (i) {
      let node = this.head;
      let count = 0;
      while (node !== this.tail) {
        if (count === i) {
          newNode.next = node.next;
          node.next = newNode;
          return true;
        }
        node = node.next;
        count += 1;
      }
      if (node === this.tail && count === i) {
        this.pushEnd(value);
        return true;
      }
      if (node === this.tail && count < i) {
        return false;
      }
    }
    this.pushEnd(value);
    return true;
  }

  removeNode(i) {
    if (i) {
      let node = this.head;
      let count = 0;
      while (node.next !== this.tail) {
        if (count === i) {
          let buf = this.head;
          let amount = 0;
          while (amount < count - 1) {
            buf = buf.next;
            amount += 1;
          }
          buf.next = node.next;
          return true;
        }
        node = node.next;
        count += 1;
      }
      if (node === this.tail && count === i) {
        this.popEnd(value);
        return true;
      }
      if (node === this.tail && count < i) {
        return false;
      }
    } else if (i === 0) this.popStart();
    else {
      this.popEnd();
      return true;
    }
    return false;
  }

  pushStart(value) {
    const newNode = new Node(value);
    if (this.head === null && this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next(this.head);
      this.head = newNode;
    }
  }

  pushEnd(value) {
    const newNode = new Node(value);
    if (this.head === null && this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else if (this.head === this.tail) {
      this.head.next = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  popEnd() {
    if (this.head === null) {
      throw new Error('elements is not in list');
    } else if (this.head === this.tail) {
      return false;
    } else {
      let node = this.head;
      while (node.next !== this.tail) {
        node = node.next;
      }
      node.next = null;
      this.tail = node;
      return true;
    }
  }

  popStart() {
    if (this.head === null) {
      throw new Error('elements is not in list');
    } else if (this.head === this.tail) {
      return false;
    } else {
      this.head = this.head.next;
      return true;
    }
  }

  print() {
    let buf = [];
    let node = this.head;
    if (this.head === null && this.tail === null) {
      console.log('list is empty');
    } else {
      while (node !== this.tail) {
        buf = [...buf, node.value];
        node = node.next;
      }
      buf = [...buf, node.value];
      console.log(buf.join(','));
    }
  }
}
