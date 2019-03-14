const MOVIE_URL = "http://localhost:3001/movies"
const ACTORS_URL = "http://localhost:3001/actors"
const ACTOR_LOOKUP = {}

// Movie Response {
//   "id": 1,
//   "title": "CITIZEN KANE",
//   "year": "1941",
//   "actors": [ 1, 2, 3, 4 ]
// }

// Actor Response
// [{ id: 2, name: "Humphrey Bogart" }]
//
// <div class="movie">
//   <h1>North by Northwest</h1>
//   <form>
//     <input type="text" />
//     <button>Add Actor</button>
//   </form>
//   <ul>
//     <li>Cary Grant<button>Remove</button></li>
//     <li>Eva Marie Saint<button>Remove</button></li>
//     <li>James Mason<button>Remove</button></li>
//   </ul>
// </div>

function badWay() {
  let title = "The Room"
  let actor1 = "Tommy Wisseau"
  let actor2 = "Danny"
  let content = `
<div class="movie">
  <h1>${title}</h1>
  <form>
    <input type="text" />
    <button>Add Actor</button>
  </form>
  <ul>
    <li>${actor1}</li>
    <li>${actor2}</li>
  </ul>
</div>`

  let movies = document.getElementById('movies')
  movies.innerHTML = content
}

fetch(ACTORS_URL)
.then(response => response.json())
.then(json => {
  json.forEach(actor => {
    ACTOR_LOOKUP[actor.id] = actor.name
  })
  return fetch(MOVIE_URL)
})
.then(response => response.json())
.then(json => {
  json.forEach(movie => {
    createMovieCard(movie)
  })
})

function createMovieCard(info) {
  console.log('creating movie card')
  let movies = document.getElementById('movies')
  let movie = document.createElement('div')
  movie.className = 'movie'

  let h1 = document.createElement('h1')
  let form = document.createElement('form')
  let ul = document.createElement('ul')

  h1.textContent = `(${info.year}) ${info.title}`

  let input = document.createElement('input')
  let button = document.createElement('button')
  button.textContent = "Add Actor"

  form.addEventListener('submit', (ev) => {
    // prevent the form from navigating to a new page
    ev.preventDefault()

    info.actors.push(parseInt(input.value))
    let bodyJSON = JSON.stringify(info) 
    console.log('POST info', bodyJSON);

    fetch(MOVIE_URL + '/' + info.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: bodyJSON
    })
    .then(response => response.json())
    .then(json => {
      let newActorId = json.actors[json.actors.length - 1]
      actorListItem(ul, newActorId)
    })
  })

  form.appendChild(input)
  form.appendChild(button)

  info.actors.forEach(actorId => {
    actorListItem(ul, actorId)
  })

  movie.appendChild(h1)
  movie.appendChild(form)
  movie.appendChild(ul)

  movies.appendChild(movie)
}

function actorListItem(ul, actorId) {
  let li = document.createElement('li')
  let button = document.createElement('button')

  li.textContent = ACTOR_LOOKUP[actorId]
  button.textContent = "Remove Actor"

  button.addEventListener('click', () => {
    li.remove()
  })

  li.appendChild(button)
  ul.appendChild(li)
}