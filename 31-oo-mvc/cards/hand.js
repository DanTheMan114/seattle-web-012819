class Hand {
  constructor() {
    this.cards = []
  }

  render() {
    const hand = document.createElement('div')
    this.cards.forEach(card => {
      hand.appendChild(card.render())
    })
    return hand
  }
}