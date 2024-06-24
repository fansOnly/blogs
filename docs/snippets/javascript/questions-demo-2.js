function _new(Ctor, ...args) {
  const obj = Object.create(Ctor.prototype)
  const res = Ctor.call(obj, ...args)
  return res !== null && typeof res === 'object' ? res : obj
}

// demo
function Car(brand) {
  this.brand = brand
}

const bwm = _new(Car, 'baoma')

console.log(bwm) // output ?