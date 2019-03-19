class Filter {
  constructor() {
    this.listeners = []
  }

  addListener(cb) {
    this.listeners.push(cb)
  }

  callListeners(value) {
    this.listeners.forEach(func => {
      func(value)
    })
  }

  render() {
    const form = document.createElement('form')
    const input = document.createElement('input')
    const button = document.createElement('button')

    input.placeholder = 'filter'
    button.textContent = 'filter'

    form.appendChild(input)
    form.appendChild(button)

    input.addEventListener('keyup', () => {
      console.log('change', input.value)
      this.callListeners(input.value)
    })
    
    return form
  }
}