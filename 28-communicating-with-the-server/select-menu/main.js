// document.addEventListener('DOMContentLoaded', main)
window.addEventListener('load', main)

const MOVIE_SERVER = 'http://localhost:3000/movies';
let MOVIE_RESULTS = []

function main() {
  // arrow functions have this short alternative
  // where you can immediately return one expression
  // without writing "return"
  //.then(result => result.json())
  fetch(MOVIE_SERVER)
  .then(result => {
    return result.json()
  })
  .then(json => {
    MOVIE_RESULTS = json
    renderMovies(MOVIE_RESULTS)
  })

  const select = document.getElementById('select-decade')
  select.addEventListener('change', selectDecade)
}

// iterate through an array of movies
// create DOM elements for their year and title
// render them in the list of movie results
function renderMovies(movies) {
  const results = document.getElementById('results');
  results.innerHTML = '';

  for (movie of movies) {
    // movie looks like {id, year, title}
    //let title = movie.title
    //let year = movie.year

    // preferring object destructuring
    let {title, year} = movie;
    let li = document.createElement('li');
    li.textContent = `(${year}) ${title}`

    // append each movie to the list of movies
    results.appendChild(li)
  }
}

function selectDecade(event) {
  console.log('selected', event)
  let yearPrefix = event.target.value
  if (yearPrefix === 'none') {
    return
  }

  // instead of removing things from the DOM
  // we could have toggled visibility
  // of <li> elements and not removed them
  // from the page
  // BUT!! this is still susepctible
  // to detecting the year properly like
  // (1968) 2001 A Space Odyssey
  // could have fixed with .includes("(" + prefix)

  // filter through the list of movies
  // and select only movies that match the year prefix
  let filtered = []
  for (movie of MOVIE_RESULTS) {
    if (movie.year.includes(yearPrefix)) {
      filtered.push(movie)
    }
  }
  renderMovies(filtered)

  // for (let i = lis.length-1; i >= 0; i--) {
  //   let li = lis[i]
  //   let text = li.textContent
  //   if (!text.includes(yearPrefix)) {
  //     console.log(lis.length, 'removed:', text)
  //     li.remove();
  //   } else {
  //     console.log(lis.length, 'kept:', text)
  //   }
  // }
}