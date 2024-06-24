Function.prototype.myBind = function(context, ...args) {
  const self = this
  function NOOP() {}
  const fBound = function(...args2) {
    return self.apply(self instanceof fBound ? this : context, [...args, ...args2])
  }

  if (this.prototype) {
    NOOP.prototype = this.prototype
  }

  fBound.prototype = new NOOP()
  return fBound
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

const say2 = son.say.myBind(father)
say2('boy', 13) // output ?