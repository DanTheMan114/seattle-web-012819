const s1 = new Subscription()
const s2 = new Subscription()

s1.addListener(() => {
  console.log('listening to subscription 1')
})

s1.addListener(() => {
  console.log('listening to subscription 1 again')
})

s2.addListener(() => {
  console.log('listening to subscription 2')
})