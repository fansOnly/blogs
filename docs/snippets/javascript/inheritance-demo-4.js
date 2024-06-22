function create(obj) {
  function Fn() {}
  Fn.prototype = obj
  return new Fn()
}

const parent = {
  name: 'parent',
  info: {
    age: 20
  },
  say: function() {
    console.log(`My name is ${this.name}, I'm ${this.info.age} years old.`)
  }
}


const lily = create(parent)
const john = create(parent)

lily.say()

lily.info.age = 15
console.log(lily.info === john.info)

john.say()