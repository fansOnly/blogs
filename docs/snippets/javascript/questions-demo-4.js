
function _create(obj) {
  function NOOP() {}
  NOOP.prototype = obj
  return new NOOP()
}

// demo
function Family(surname) {
  this.surname = surname
}

Family.prototype.say = function() {
  console.log(`My name is ${this.surname} xxx.`)
}

const father = new Family('li')

const son = _create(father)

son.say() // output ?