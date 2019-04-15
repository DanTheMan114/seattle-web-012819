console.log('hi')

let login = document.getElementById('login')
login.addEventListener('submit', handleLogin)

function handleLogin(ev) {
  let username = ev.target.elements['username']
  let password = ev.target.elements['password']

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
  })
}