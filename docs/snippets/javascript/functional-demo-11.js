function cached(fn) {
  const cache = Object.create(null)
  return function(str) {
    const hit = cache[str]
    return hit || (cache[str] = fn(str))
  }
}

// demo
const square = a => {
  console.log(`run again if a changed.`)
  return a * a
}

const fn = cached(square)
const res = fn(5)
console.log(res)
fn(5)
fn(5)
fn(5)