class User {
  constructor(name, email) {
    this.name = name
    this.email = email
  }

  greet() {
    console.log('Hello! My name is ' + this.name)
  }
}