function curry(fn, ...args) {
  const length = fn.length
  return function(...args2) {
    const allArgs = [...args, ...args2]
    return allArgs.length < length ? curry.call(null, fn, ...allArgs) : fn.call(this, ...allArgs)
  }
}

// demo
function add(a, b, c) {
  return a + b + c
}

const curryAdd = curry(add, 1)
const sum = curryAdd(2)(3)
console.log(sum) // output ?