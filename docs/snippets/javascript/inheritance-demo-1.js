function Parent(name) {
  this.name = name
  this.info = { age: 20 }
}
Parent.prototype.say = function() {
  console.log(`I'm ${this.info.age} years old.`)
}
function Children() {}
// 子类的原型指向父类实例
Children.prototype = new Parent()
console.log(Children.prototype.__proto__) // output ?

const lily = new Child()
const john = new Child()

console.log(lily.info === john.info) // output ?

lily.info.age = 15
john.say() // output ?