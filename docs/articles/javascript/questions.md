---
outline: 5
---

# 面试题汇总{#title}

---

<br />

##### 题目 ①{#example-1}

- 手动实现 <code>bind</code> / <code>call</code> / <code>apply</code> 函数

::: info 解析

- <code>call</code>、<code>apply</code>、<code>bind</code> 的作用是改变函数调用时的 this 指向
- <code>call</code>、<code>apply</code> 调用后会直接执行，<code>bind</code> 会返回一个新的函数，需要手动调用执行
- <code>call</code>、<code>bind</code> 可以接受多个参数，<code>apply</code> 接受一个参数数组
  :::

::: details 查看答案
::: code-group
<<< @/snippets/javascript/questions-demo-1-1.js [call]
<<< @/snippets/javascript/questions-demo-1-2.js [apply]
<<< @/snippets/javascript/questions-demo-1-3.js [bind]
:::

<br />

##### 题目 ②{#example-2}

- 手动实现 <code>new</code> 函数

::: info 解析

- <code>new</code> 运算符的作用是基于构造函数创建实例
- 1. 根据传入的构造函数原型创建一个对象
- 2. 将构造函数的 <code>this</code> 指向这个创建的对象，并执行
- 3. 如果构造函数有自己的返回值（非 <code>undefined</code>），将这个返回值作为执行结果返回
- 4. 如果构造函数没有自己的返回值，将函数的执行结果返回
     :::

::: details 查看答案
<<< @/snippets/javascript/questions-demo-2.js
:::

<br />

##### 题目 ③{#example-3}

- 手动实现 <code>instanceOf</code> 函数

::: info 解析

- <code>instanceOf</code> 运算符的作用是判断一个对象是否继承某个构造函数对象
- 根如果一个对象继承自某个构造函数对象，它的原型链的尽头一定指向这个构造函数对象的原型
  :::

::: details 查看答案
<<< @/snippets/javascript/questions-demo-3.js
:::

<br />

##### 题目 ④{#example-4}

- 手动实现 <code>create</code> 函数

::: info 解析

- <code>create</code> 函数的作用是根据传入的原型对象，创建一个继承自原型对象的新对象
- 1. 创建一个空白函数
- 2. 将函数的原型指向传入的原型对象
- 3. 返回这个空白函数的实例，其原型继承自传入的原型对象
     :::

::: details 查看答案
<<< @/snippets/javascript/questions-demo-4.js
:::

<br />

##### 题目 ⑤{#example-5}

- 实现防抖函数

::: info 解析

- 函数触发后，开启计时器，n 秒内只执行一次，再次触发，会重置之前的计时器和函数执行
- 适用于输入框输入、表单验证、窗口缩放等场景
  :::

::: details 查看答案
<<< @/snippets/javascript/questions-demo-5-1.js
:::

- 实现节流函数

::: info 解析

- 函数触发后，开启计时器，每 n 秒执行一次
- 适用于按钮点击、窗口拖拽、浏览器的滚动事件等场景
  :::

::: details 查看答案
<<< @/snippets/javascript/questions-demo-5-2.js
:::

<br />

##### 题目 ⑥{#example-6}

- 实现函数柯里化/偏函数

::: details 查看答案
[函数式编程-柯里化](./functional-programming.md#curry)
:::

<br />

##### 题目 ⑦{#example-7}

- 打印九九乘法表

::: details 查看答案
<<< @/snippets/javascript/questions-demo-7.js
:::

<br />
