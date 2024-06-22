const toString = Object.prototype.toString

function getType(value) {
  return toString.call(value).replace(/\[object (.+)]/g, '$1').toLowerCase()
}

console.log(getType('123'))
console.log(getType(123))
console.log(getType(true))
console.log(getType(null))
console.log(getType(undefined))
console.log(getType({}))
console.log(getType([]))
console.log(getType(function () {}))
console.log(getType(new Date()))
console.log(getType(Symbol()))
console.log(getType(new RegExp()))
console.log(getType(Promise.resolve()))