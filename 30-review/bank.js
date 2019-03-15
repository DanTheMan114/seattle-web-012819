class Bank {
  set balance(newVal) {
    this.balance_ = newVal
    if (this.balance_ < 0) {
      this.balance_ = 0
    }
  }

  get balance() {
    return this.balance_
  }
}

let bank = new Bank()
bank.balance = 100
console.log(bank.balance)
bank.balance = -100
console.log(bank.balance)

bank.balance_ = -999
console.log(bank.balance_)
// could have just made a function!
// bank.setBalance(100)