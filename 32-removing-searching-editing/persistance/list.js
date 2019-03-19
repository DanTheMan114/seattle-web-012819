class List {
  constructor() {
    this.load()
    this.filter = ''
  }

  addItem(text) {
    let item = new ListItem(text)
    this.items.push(item)    

    this.save()
  }

  removeItem(index) {
    this.items.splice(index, 1) 
    this.save()
  }

  save() {
    localStorage.setItem('list', JSON.stringify(this.items));
  }

  load() {
    let list = localStorage.getItem('list');
    console.log('list:', list)
    if (list !== null && list !== 'null') {
      this.items = JSON.parse(list).map(json => {
        return new ListItem(json.text)
      })
      console.log('parsed list:', this.items)
    } else {
      this.items = [
        new ListItem('buy milk'),
        new ListItem('buy bacon'),
        new ListItem('buy eggs'),
        new ListItem('buy carton'),
        new ListItem('walk cat'),
        new ListItem('cancel netflix')
      ]
    }

  }

  applyFilter(filter) {
    this.filter = filter
  }

  render() {
    let ul = document.createElement('ul')

    this.items.filter(item => {
      return item.text.startsWith(this.filter)
    })
    .forEach((item, i) => {
      let li = item.render()
      let button = document.createElement('button')
      button.textContent = 'Remove'
      li.appendChild(button)

      button.addEventListener('click', () => {
        this.removeItem(i)
        renderApp()
      })

      ul.appendChild(li)
    })

    return ul
  }
}