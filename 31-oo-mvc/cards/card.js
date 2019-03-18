const DIAMOND = '♦'
const CLUB = '♣'
const HEART = '♥'
const SPADE = '♠'

class Card {
  constructor(face, suit) {
    this.face = face
    this.suit = suit
  }

  static random() {
    let faces = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']
    let suits = [DIAMOND, CLUB, HEART, SPADE]

    function sample(arr) {
      let index = Math.floor(arr.length * Math.random())
      return arr[index]
    }

    return new Card(sample(faces), sample(suits))
  }

  // <div class="card">
  //   <div class="top-left">A♦</div>
  //   <div class="bot-right">A♦</div>
  // </div>
  render() {
    let div = document.createElement('div')
    let topLeft = document.createElement('div')
    let botRight = document.createElement('div')

    div.classList.add('card')
    topLeft.classList.add('top-left')
    botRight.classList.add('bot-right')

    topLeft.textContent = this.face + this.suit
    botRight.textContent = this.face + this.suit

    // if (this.suit === 'heart' || this.suit === 'diamond') {
    console.log('debug')
    if ([HEART, DIAMOND].includes(this.suit)) {
      div.classList.add('red')
    } else {
      div.classList.add('black')
    }

    div.appendChild(topLeft)
    div.appendChild(botRight)

    return div
  }
}