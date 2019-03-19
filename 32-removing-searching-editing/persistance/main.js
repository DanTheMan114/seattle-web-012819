const formContainer = document.getElementById('form-container')
const listContainer = document.getElementById('list-container')
const filterContainer = document.getElementById('filter-container')

form = new Form()
filter = new Filter()
list = new List()

formContainer.appendChild(form.render())
filterContainer.appendChild(filter.render())
renderApp()

form.addListener(text => {
  list.addItem(text)
  renderApp()
})

// count how many times we've entered a new thing
let count = 0
form.addListener(text => {
  count++
  let countContainer = document.getElementById('count-container') 
  countContainer.textContent = 'new items: ' + count
})

filter.addListener(query => {
  console.log('query listen:', query)
  list.applyFilter(query)
  renderApp()
})

function renderApp() {
  listContainer.innerHTML = ''
  listContainer.appendChild(list.render())
}