class Bird {
  constructor(name) {
    this.name = name;
    this.speak2 = 'property, not a function'
  }
 
  set phrase(phrase) {
    this._phrase = phrase;
  }
 
  get speak() {
    console.log('inside get speak')
    return `${this.name} says ${this._phrase || 'squawk'}`;
  }

  speak3() {
    console.log('inside speak3, normal class method')
    return 'speak3'
  }
}

let bird = new Bird();
console.log('bird.speak', bird.speak)
console.log()
console.log('bird.speak2', bird.speak2)
console.log()
console.log('bird.speak3()', bird.speak3())
console.log()