class Form {
  constructor() {
    this.listeners = []
  }

  addListener(cb) {
    this.listeners.push(cb)
  }

  callListeners(value, ev) {
    this.listeners.forEach(func => {
      func(value, ev)
    })
  }

  render() {
    const form = document.createElement('form')
    const input = document.createElement('input')
    const button = document.createElement('button')

    input.placeholder = 'buy milk'
    button.textContent = 'submit'

    form.appendChild(input)
    form.appendChild(button)

    form.addEventListener('submit', (ev) => {
      ev.preventDefault()
      this.callListeners(input.value, ev)

      // if we added to the list from here
      // it would be more hard-coded

      // if we use a listener then we have more
      // freedom to react to the form submissions
      // in a wide variety of ways
    })
    
    return form
  }
}