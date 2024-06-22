function Parent(name) { 
  this.name = name
  this.info = {
    age: 20
  }
}

Parent.prototype.say = function() {
  console.log(`My name is ${this.name}, I'm ${this.info.age} years old.`)
}

function Children(name) {
  Parent.call(this, name)
}

function inherit(sup, sub) {
  const proto = Object.create(sup.prototype)
  sub.prototype = proto
  sub.prototype.constructor = sub
}

inherit(Parent, Children)

const lily = new Children('lily')
const john = new Children('john')

lily.say()

lily.info.age = 15

lily.say()
john.say()