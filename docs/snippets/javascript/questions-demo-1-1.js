Function.prototype.myCall = function(context, ...args) {
  context = context || 'window'
  const fn = Symbol()
  context[fn] = this
  const res = context[fn](...args)
  delete context[fn]
  return res
}

// demo
const father = {
  surname: 'li'
}

const son = {
  surname: 'wang',
  say: function(gender, age) {
    console.log(`My name is ${this.surname} xxx, I'm a ${gender} and I'm ${age} years old.`)
  }
}

son.say.myCall(father, 'boy', 13) // output ?