var x = 2
var y = {
  x: 3,
  z: (function(x) {
    this.x *= x
    x += 2
    return function(n) {
      this.x *= n
      x += 3
      console.log(x)
    }
  })(x)
}
console.log(x)
// IIFE 中，this => window => window.x = x = 4

var m = y.z
// this => window
// x = 4 + 3 = 7（产生闭包）
// window.x = 4 * 4 => 16
m(4)

// this => y
// x = 7 + 3 = 10
y.z(5)

console.log(x, y.x) // window.x = 16, y.x = 15