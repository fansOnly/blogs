
function _instanceOf(obj, Ctor) {
  // let proto = obj.__proto__
  let proto = Object.getPrototypeOf(obj)
  while (proto) {
    if (proto === Ctor.prototype) return true
    // proto = proto.__proto__
    proto = Object.getPrototypeOf(proto)
  }
  return false
}

const arr = []
console.log(_instanceOf(arr, Array)) // output ?
console.log(_instanceOf(arr, Object)) // output ?
console.log(_instanceOf(arr, Function)) // output ?