function inheritObject(target) {
  const clone = Object.create(target)
  clone.say = function() {
    console.log(`My name is ${this.name}, I'm ${this.info.age} years old.`)
  }
  return clone
}

const parent = {
  name: 'parent',
  info: {
    age: 20
  }
}

const lily = inheritObject(parent)
const john = inheritObject(parent)

lily.say()
john.say()

lily.info.age = 15

john.say()