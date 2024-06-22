function Parent(name) {
  this.name = name
  this.info = { age: 20 }
}

Parent.prototype.say = function() {
  console.log(`My name is ${this.name}, I'm ${this.info.age} years old.`)
}

function Children(name) {
  Parent.call(this, name)
}

Children.prototype = new Parent()

const lily = new Children('lily')
const john = new Children('john')

lily.say() // output ?

lily.info.age = 15

lily.say() // output ?

john.say() // output ?