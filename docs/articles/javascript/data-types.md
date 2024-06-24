# 数据类型{#title}

----

### 基本数据类型{#primitives}

- 布尔值（Boolean），有 2 个值分别是：true 和 false。
- null，一个表明 null 值的特殊关键字。JavaScript 是大小写敏感的，因此 null 与 Null、NULL或变体完全不同。
- undefined，和 null 一样是一个特殊的关键字，undefined 表示变量未赋值时的属性。
- 数字（Number），整数或浮点数，例如： 42 或者 3.14159。
- 任意精度的整数（BigInt），可以安全地存储和操作大整数，甚至可以超过数字的安全整数限制。
- 字符串（String），字符串是一串表示文本值的字符序列，例如："Howdy"。
- 代表（Symbol，在 ECMAScript 6 中新添加的类型）。一种实例是唯一且不可改变的数据类型。

### 引用数据类型{#object}

+ Object

    引用类型包含很多子类型，例如 Function、Array、Date、RegExp 等。

### 包装对象{#packing-object}

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

### 类型转换{#type-coercion}

- 强制类型转换
```js
let a = 10
a = String(a)

console.log(a) // output ?
console.log(typeof a) // output ?
```

- 隐式类型转化

```js
let a = 10
a = a + '1'

console.log(a) // output ?
console.log(typeof a) // output ?

let b = '11'
b = b - 1

console.log(b) // output ?
console.log(typeof b) // output ?
```

<br />

##### 代码示例①

::: details 如何实现数据的类型判断
+ 对于基本数据类型，使用 typeof 运算符
+ 对于引用类型，使用 instanceof 运算符
+ 统一使用内部属性[[Class]]判断

<<< @/snippets/javascript/data-types-demo-1.js
:::