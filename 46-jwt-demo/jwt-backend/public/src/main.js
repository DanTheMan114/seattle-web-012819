main()
function main() {
  displayJWT()
  
  let result = document.getElementById('result')

  let create = document.getElementById('create')
  create.addEventListener('submit', handleCreate)

  let login = document.getElementById('login')
  login.addEventListener('submit', handleLogin)

  let refresh = document.getElementById('refresh')
  refresh.addEventListener('click', handleRefresh)
}

function handleCreate(ev) {
  ev.preventDefault()

  let username = ev.target.elements['username'].value
  let password = ev.target.elements['password'].value

  console.log({username, password})
  fetch('/api/v1/users', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({username, password})
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
    result.textContent = JSON.stringify(data)
    localStorage.setItem('jwt', data.jwt)
    displayJWT()
  })
}

function handleLogin(ev) {
  ev.preventDefault()

  let username = ev.target.elements['username'].value
  let password = ev.target.elements['password'].value

  console.log({username, password})
  fetch('/api/v1/login', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({username, password})
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
    result.textContent = JSON.stringify(data)
    localStorage.setItem('jwt', data.jwt)
    displayJWT()
  })
}

function handleRefresh() {
  let jwt = localStorage.getItem('jwt')
  fetch('/api/v1/secret', {
    headers: {
      'Authorization': 'Bearer ' + jwt
    }
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
    let secretEl = document.getElementById('secret')
    secretEl.textContent = JSON.stringify(data)
  })
}

function displayJWT() {
  let jwt = localStorage.getItem('jwt')
  let jwtDiv = document.getElementById('jwt')
  jwtDiv.textContent = '' + jwt

  let payload = jwt.split('.')[1]
  payload = payload.replace(/-/g, '+').replace(/_/g, '/')
  let decoded = atob(payload)
  jwtDiv.textContent += '\n' + decoded
}