// demo
function getType(type) {
  return function(value) {
    return Object.prototype.toString.call(value) === `[object ${type}]`
  }
}

const isArray = getType('Array')
const isObject = getType('Object')
const isString = getType('String')

console.log(isArray([])) // output ?
console.log(isObject({})) // output ?
console.log(isString(123)) // output ?