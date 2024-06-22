# 闭包

::: info 概念
+ 闭包是指有权访问一个函数作用域中变量的函数。 - <b>《Javascript高级程序设计》</b>
+ 从技术的角度讲，所有的函数都是闭包，它们都是对象，都关联作用域链。 - <b>《Javascript权威指南》</b>
+ 当函数可以记住并访问所在的词法作用域时，就产生了闭包，既是函数执行是在词法作用域外。 - <b>《你不知道的Javascript》</b>
+ 当内部函数以某一种方式被任何一个外部函数之外的任何作用域访问时，就会创建闭包。 - <b>《MDN 文档》</b>
:::

::: tip 闭包的特性
+ 闭包会随着函数的创建而被创建
+ 当外部作用域执行完毕后，内部函数仍在运行，这时闭包才发挥作用
:::

::: warning 闭包的作用
1. 能够访问函数定义时的词法作用域，阻止其被回收
2. 创建私有变量 or 方法
3. 延伸变量作用域
:::

::: danger 闭包的弊端
1. 不合理的闭包可能会造成内存泄漏
:::

<br />

#### 代码示例①

```js
/**
 * 如何打印 0 1 2 3 4
 */
for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i)
  }, 1000);
}
```

::: details 提示
1. 函数传参
2. 闭包嵌套
3. let 声明方式
:::

::: details 查看答案
<<< @/snippets/javascript/closures-demo-1.js
:::

<br />

#### 代码示例②

```js
/**
 * 以下场景下，分别打印什么内容
 */
function fun(n, o) {
  console.log(o)
  return {
    fun: function(m) {
      return fun(m, n)
    }
  }
}

var a = fun(0);
a.fun(1);
a.fun(2);
a.fun(3)

var b = fun(0).fun(1).fun(2).fun(3)

var c = fun(0).fun(1);
c.fun(2);
c.fun(3)
```

::: details 提示
闭包
:::

::: details 查看答案
<<< @/snippets/javascript/closures-demo-2.js
:::

<br />

#### 代码示例③
```js
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
console.log(x) // 这里输出什么？

var m = y.z
m(4)

y.z(5)

console.log(x, y.x)  // 这里输出什么？
```

::: details 提示
闭包、作用域
:::

::: details 查看答案
<<< @/snippets/javascript/closures-demo-3.js
:::