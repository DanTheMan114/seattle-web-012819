class Bomb {
  constructor() {
    this.attempts = 0
  }
  get bump() {
    this.attempts++
    if (this.attempts > 3) {
      console.log('BOOOOM!!!!')
    } else {
      console.log('okay')
    }
  }
}

let bomb = new Bomb()
bomb.bump
bomb.bump
bomb.bump
bomb.bump