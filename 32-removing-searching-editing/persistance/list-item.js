class ListItem {
  constructor(text) {
    this.text = text
  }

  render() {
    let li = document.createElement('li')
    li.textContent = this.text
    return li
  }
}