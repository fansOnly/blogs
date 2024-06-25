---
outline: 5
---

# 面试题汇总{#title}

---

<br />

##### 题目 ①{#Q&A-1}

- 如何使条件 a == 1 && a == 2 成立？

::: details 思路解析

1. 隐式类型转换
2. 数据劫持
3. 代理拦截
   :::

::: details 查看答案
::: code-group

```js [对象隐式转换]
const a = {
  val: 1,
  toString: function () {
    return a.val++;
  },
};

console.log(a == 1 && a == 2); // output ?
```

```js [数据劫持]
let i = 1;
Object.defineProperty(window, 'a', {
  get() {
    return i++;
  },
});

console.log(a == 1 && a == 2); // output ?
```

```js [代理]
const a = new Proxy(
  {},
  {
    i: 1,
    get() {
      return () => this.i++;
    },
  }
);

console.log(a == 1 && a == 2); // output ?
```

```js [数组隐式转换]
const a = [1, 2];
a.join = a.shift;

console.log(a == 1 && a == 2); // output ?
```

:::

<br />

##### 题目 ②{#Q&A-2}

- 如何使等式 var [a, b] = {a: 1, b: 2} 成立？

::: details 思路解析

1. 等式左侧是数组，右侧是对象，直接执行会报错：

    TypeError: {(intermediate value)(intermediate value)} is not iterable

2. 如何为对象实现可迭代属性
   :::

::: details 查看答案
```js
Object.prototype[Symbol.iterator] = function() {
  return Object.values(this)[Symbol.iterator]()
}

var [a, b] = {a: 1, b: 2} // output ?
```
:::

<br />

##### 题目 ③{#Q&A-3}

分析以下代码的执行结果是什么？

```js
var a = {n: 1};
var b = a;
a.x = a = {n: 2};

console.log(a.x) // output ?
console.log(b.x) // output ?
```

::: details 查看答案
```js
// 伪代码

// var a = {n: 1};
var _o = {n: 1}
var a = _o

// var b = a;
var b = _o

// a.x = a = {n: 2};
a.x = (a = {n: 2})
a = {n: 2}
_o.x = {n: 2}
```
:::

##### 题目 ④{#Q&A-4}

分析一下代码的执行结果是什么？

```js
var x=1
switch(x++)
{
  case 0: ++x
  case 1: ++x
  case 2: ++x
}

console.log(x) // output ?
```

::: details 查看答案
- 一个 switch 语句首先会计算其 expression
- 若 break 被省略，程序会继续执行 switch 语句中的下一条语句
```js
output: 4
```
:::

##### 题目 ⑤{#Q&A-5}

分析一下代码的执行结果是什么？

```js
{
  a = 1
  function a() {}
  a = 2
  console.log(a) // output ?
}
console.log(a) // output ?
```

::: details 查看答案
```js
var a = undefined
{
  a = 1 // window.a = 1
  // function a() {}
  // 函数声明执行时，会绑定变量环境（var）与词法环境（let）
  let _a = function a() {}
  _a = 2 // 赋值给词法环境中的 _a
  console.log(_a)
}
console.log(a)
```
:::