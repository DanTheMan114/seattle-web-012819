class Subscription {
  constructor() {
    this.listeners = []
  }

  addListener(cb) {
    this.listeners.push(cb)
  }

  callAllListeners() {
    this.listeners.forEach(func => {
      func()
    })
  }
}