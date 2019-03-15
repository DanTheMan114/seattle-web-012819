const priorities = ['low-priority', 'medium-priority', 'high-priority'];
const lis = document.getElementsByTagName('li')
for (li of lis) {
  // li.addEventListener('click', (ev) => {
  //   handleClick(ev)
  // })

  // const func = (ev) => { handleClick(ev) };
  // li.addEventListener('click', func);
  li.addEventListener('click', handleClick)
}


function handleClick(ev) {
  console.log('clicked!')
  // events come with a .target property which
  // is a reference to the element that triggered
  // the event. the element is the "target" of the event
  let li = ev.target
  if (li.classList.length === 0) {
    li.classList.add(priorities[0])
  } else if (li.classList.contains(priorities[0])) {
    li.classList.remove(priorities[0])
    li.classList.add(priorities[1])
  } else if (li.classList.contains(priorities[1])) {
    li.classList.remove(priorities[1])
    li.classList.add(priorities[2])
  } else if (li.classList.contains(priorities[2])) {
    li.classList.remove(priorities[2])
  }
}

// function map(ll, cb) {
//   for (let i = 0; i < ll.length; i++) {
//     cb(ll[i])
//   }
// }

// function square(n) {
//   return n * n
// }

// let ll = [1, 2, 3, 4, 5]
// map(ll, square)