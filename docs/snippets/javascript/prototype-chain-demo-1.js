function Foo() {
  getName = function () {
    return 1
  }
  return this
}
Foo.getName = function () {
  return 2
}
Foo.prototype.getName = function () {
  return 3
}
// 1. 创建阶段，将 getName 变量提升，赋值 undefined
// 3. 代码执行到此，将 getName 重新赋值，return 4
var getName = function () {
  return 4
}
// 2. 创建阶段 getName 函数提升，覆盖变量 getName，return 5
function getName() {
  return 5
}

// Foo.getName() => return 2
console.log(Foo.getName())

// 执行 getName() 函数 => return 4
console.log(getName())

// 1. 执行 Foo() 函数
// 1.1 getName 函数又被重新赋值 = return 1
// 1.2 return this 代表返回 window 对象
// 2. Foo().getName() = window.getName() = getName() => return 1
console.log(Foo().getName())

// 同上 => return 1
console.log(getName())

// (new Foo.getName)()
// 1. Foo.getName() = return 2
// 2. new => return 2
console.log(new Foo.getName())

// (new Foo()).getName()
// 1. 先执行 new Foo()，返回 Foo 的实例对象 _foo
// 2. _foo.getName()，从 Foo 原型上查找 = Foo.prototype.getName => return 3
console.log(new Foo().getName())

// new ((new Foo()).getName)()
// 1. 先执行 new Foo()，返回 Foo 的实例对象 _foo
// 2. 在执行 _foo.getName()，从 Foo 原型上查找 = Foo.prototype.getName => return 3
// 3. new => return 3
console.log(new new Foo().getName())