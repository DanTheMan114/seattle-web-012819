function User(name, email) {
  this.name = name
  this.email = email
}

User.prototype.greet = function() {
  console.log('Hello! My name is '+ this.name)
}

u1 = new User('Steve', 'steve@steve.com');
u2 = new User('Joe', 'joe@joe.com');
u1.greet()
u2.greet()