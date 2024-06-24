function toLowerCase(str) {
  return str.toLowerCase()
}

function sign(str) {
  return str + '!!'
}

function compose(f1, f2) {
  return function() {
    return f2.call(this, f1.call(this, ...arguments))
  }
}

// demo
const fn = compose(sign, toLowerCase)
console.log(fn('Hello World')) // output ?