---
outline: 5
---

# 面试题汇总{#title}

---

<br />

##### 题目 ①{#Q&A-1}

- 如何使条件 a == 1 && a == 2 成立

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

- 如何使等式 var [a, b] = {a: 1, b: 2} 成立

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
