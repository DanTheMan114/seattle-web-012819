let ll = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let urls = ["amazon.com", "google.com", "yahoo.com"]

// general forEach function we can use for any function passed it
function forEach(ll, callbackFn) {
  for (let i = 0; i < ll.length; i++) {
    callbackFn(ll[i]) 
  }
}

forEach(ll, (item) => console.log(item))
forEach(ll, (item) => fancyPrint(item))
forEach(urls, (url) => fetch(url))

function forEachPrint(ll) {
  for (let i = 0; i < ll.length; i++) {
    console.log(ll[i])
  }
}

function forEachFancyPrint(ll) {
  for (let i = 0; i < ll.length; i++) {
    fancyPrint(ll[i])
  }
}

function fetchEachUrl(urls) {
  for (let i = 0; i < urls.length; i++) {
    fetch(urls[i])
  }
}