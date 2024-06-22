class Parent {
  constructor(name) {
    this.name = name
    this.info = {
      age: 20
    }
  }

  say() {
    console.log(`My name is ${this.name}, I'm ${this.info.age} years old.`)
  }
}


class Children extends Parent {
  constructor(name) {
    super(name)
    this.name = name
  }
}


const lily = new Children('lily')
const john = new Children('john')

lily.say()
john.say()

lily.info.age = 15

lily.say()
john.say()