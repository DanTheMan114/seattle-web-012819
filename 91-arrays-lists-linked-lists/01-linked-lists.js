console.log('hi')
class ListNode {
  constructor(data, next) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.root = null
    this.size = 0
  }

  prepend(value) {
    let node = new ListNode(value)
    node.next = this.root
    this.root = node
    this.size++
  }
}

let ll = new LinkedList()
while (ll.size < 5) {
  ll.prepend(Math.random())
}
debugger