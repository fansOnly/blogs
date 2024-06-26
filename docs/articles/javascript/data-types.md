# 数据类型{#title}

---

### 基本数据类型{#primitives}

- 布尔值（<code>Boolean</code>），有 2 个值分别是：<code>true</code> 和 <code>false</code>。
- <code>null</code>，一个表明 <code>null</code> 值的特殊关键字。JavaScript 是大小写敏感的，因此 <code>null</code> 与 <code>Null</code>、<code>NULL</code> 或变体完全不同。
- <code>undefined</code>，和 <code>null</code> 一样是一个特殊的关键字，<code>undefined</code> 表示变量未赋值时的属性。
- 数字（<code>Number</code>），整数或浮点数，例如： 42 或者 3.14159。
- 任意精度的整数（<code>BigInt</code>），可以安全地存储和操作大整数，甚至可以超过数字的安全整数限制。
- 字符串（<code>String</code>），字符串是一串表示文本值的字符序列，例如：<code>"Howdy"</code>。
- 代表（<code>Symbol</code>，在 ECMAScript 6 中新添加的类型）。一种实例是唯一且不可改变的数据类型。

<br />

---

### 引用数据类型{#object}

- 对象 <code>Object</code>

  引用类型包含很多子类型，例如 <code>Function</code>、<code>Array</code>、<code>Date</code>、<code>RegExp</code> 等。

<br />

---

### 包装对象{#packing-object}

- <code>String</code>
- <code>Number</code>
- <code>Boolean</code>

::: warning 思考

```js
const str = 'good';
// 当我们调用 str.length 时发生了什么？
console.log(str.length);
```

:::

::: details 查看伪代码

```js
// 1. 创建包装对象
const _str = new String('good');
// 2. 从包装对象上查找 length 属性
const len = _str.length;
// 3. 回收包装对象
_str = null;
console.log(len);
```

:::

<br />

---

### 类型转换{#type-coercion}

- 强制类型转换

```js
let a = 10;
a = String(a);

console.log(a); // output ?
console.log(typeof a); // output ?
```

- 隐式类型转化

```js
let a = 10;
a = a + '1';

console.log(a); // output ?
console.log(typeof a); // output ?

let b = '11';
b = b - 1;

console.log(b); // output ?
console.log(typeof b); // output ?
```

<br />

---

<br />

##### 代码示例 ①

::: details 如何实现数据的类型判断

- 对于基本数据类型，使用 typeof 运算符
- 对于引用类型，使用 instanceof 运算符
- 统一使用内部属性[[Class]]判断

<<< @/snippets/javascript/data-types-demo-1.js
:::
