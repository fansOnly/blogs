---
outline: [3, 4]
---

# 函数式编程{#title}

---

### 函数式编程的特点{#feature}

1. 函数是一等公民

   - 函数可以赋值给其他变量，或者作为函数的参数，或者作为函数的返回值

2. 只用表达式，不用语句

   - 表达式是一段单纯的运算过程，总有返回值
   - 语句是执行某种操作，没有返回值

3. 无副作用

   - 不会产生运算以外的结果
   - 同一个输入产生同一个输出

4. 不可变性

   - 不修改变量，总是返回新的值

5. 引用透明

   - 函数的运行不依赖外部变量，只依赖于输入的参数

<br />

---

### 函数式编程的应用场景{#scene}

<br />

#### 1. 纯函数{#pure-function}

      同样的输入得到同样的输出，无副作用

::: details 查看示例

```js
function add(a, b) {
  return a + b;
}

console.log(add(1, 2)); // output ?
```

:::

#### 2. 函数组合{#function-combination}

      将多个依次调用的函数组合成一个大的函数，简化调用

::: details 查看示例
<<< @/snippets/javascript/functional-demo-2.js
:::

#### 3. 高阶函数{#high-function}

      接收一个或多个函数作为参数，返回一个新的函数

::: details 查看示例

```js
function sum(a, b, f) {
  return f(a) + f(b);
}
function double(a) {
  return a * 2;
}

console.log(sum(2, 3, double)); // output ?
```

:::

#### 4. 闭包{#closures}

      函数作用域嵌套，多个作用域共享变量

::: details 查看示例

```js
function total() {
  const multiple = 2;
  return function (num) {
    return multiple * num;
  };
}

const double = total();
const res = double(5);
console.log(res); // output ?
```

:::

#### 5. 柯里化{#curry}

      将一个多参数函数转换成多个嵌套的单参数函数

::: details 查看示例
<<< @/snippets/javascript/functional-demo-5.js
:::

#### 6. 偏函数{#partial-function}

      缓存一部分参数，剩余的参数在调用时传入

::: details 查看示例
<<< @/snippets/javascript/functional-demo-6.js
:::

#### 7. 惰性函数{#inert-function}

      预先定义多个操作，不立即求值，在使用时再进行求值，避免不必要的求值

::: details 查看示例
<<< @/snippets/javascript/functional-demo-7.js
:::

#### 8. 递归{#recursion}

      控制函数循环调用的一种方式

::: details 查看示例
[斐波那契数列 - 递归实现](./fibonacci.md#recursion)
:::

#### 9. 尾递归{#tail-recursion}

      递归优化，避免多层级函数嵌套导致的内存溢出的优化

::: details 查看示例
[斐波那契数列 - 尾递归实现](./fibonacci.md#tail-recursion)
:::

#### 10. 链式调用{#call-chaining}

      更加优雅的调用多个函数的方式

::: details 查看示例
<<< @/snippets/javascript/functional-demo-10.js
:::

#### 11. 函数缓存{#function-cache}

      记忆函数上次的执行结果，直接返回

::: details 查看示例
<<< @/snippets/javascript/functional-demo-11.js
:::

<br />

---

### 其他{#other}

<br />

#### 1. 函数劫持{#function-hijacking}

- 使用新的变量保存被劫持函数
- 在新函数中实现改写逻辑
- 在新函数中调用被劫持函数（变量）

::: details 查看代码

```js
function log(title) {
  console.log(`output data: ${title}`);
}

var _log = log;

log = function (...args) {
  // 调用被劫持函数
  _log.call(null, ...args);
  // 其他改写逻辑
  console.log('hijacking code here.');
};

log('hello');
```

:::
