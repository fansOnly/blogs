# 数据类型

----

<br />

##### 1. 基本数据类型

+ String
+ Number
+ Boolean
+ Null
+ Undefined
+ Symbol
+ BigInt

<br />

##### 2. 引用数据类型

+ Object

    引用类型包含很多子类型，例如 Function、Array、Date、RegExp 等。

<br />

##### 3. 包装对象

+ String
+ Number
+ Boolean

::: warning 思考
```js
const str = 'good'
// 当我们调用 str.length 时发生了什么？
console.log(str.length)
```
:::

::: details 查看伪代码
```js
// 1. 创建包装对象
const _str = new String('good')
// 2. 从包装对象上查找 length 属性
const len = _str.length
// 3. 回收包装对象
_str = null
console.log(len)
```
:::

<br />

##### 代码示例①

::: details 如何实现数据的类型判断
+ 对于基本数据类型，使用 typeof 运算符
+ 对于引用类型，使用 instanceof 运算符
+ 统一使用内部属性[[Class]]判断

<<< @/snippets/javascript/data-types-demo-1.js
:::