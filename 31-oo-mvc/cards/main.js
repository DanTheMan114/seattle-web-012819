const handContainer = document.getElementById('hand-container')
const deal = document.getElementById('deal')
deal.addEventListener('click', newHand)
newHand()

function newHand() {
  let hand = new Hand()
  hand.cards.push(Card.random())
  hand.cards.push(Card.random())
  hand.cards.push(Card.random())
  hand.cards.push(Card.random())
  hand.cards.push(Card.random())

  handContainer.innerHTML = ''
  handContainer.appendChild(hand.render())
}