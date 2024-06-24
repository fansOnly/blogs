# Event

----

##### 1. 事件模型

::: info 相关概念
+ 捕获阶段：事件从 window 开始向下触发，直至达到目标元素
+ 目标阶段：事件达到目标元素
+ 冒泡阶段：事件从目标元素开始向上冒泡，直至达到 window
:::

::: danger 提问
关于 event.target 和 event.currentTarget 分别代表什么意思？
:::

##### 代码示例①
::: details 如何实现一个事件模型？
<<< @/snippets/javascript/event-demo-1.js
:::

<br />

##### 2. 事件循环

::: info 相关概念
+ 宏任务是指由宿主发起的任务，例如 setTimeout、setInterval、setImmediate、Ajax 事件注册等。
+ 微任务是指由JS 引擎发起的任务，例如 Promise、nextTick等。
:::

::: info 执行流程
+ 执行主线程宏任务
+ 检查微任务列表并执行
+ 检查宏任务列表并执行
+ 重复上述第二步、第三步直至所有的微任务和宏任务被执行完
+ 回归主线程
:::

::: details 流程图
![event loop](../images/event-loop.PNG)
:::

<br />

##### 代码示例②

::: details 如何实现一个 event 类
<<< @/snippets/javascript/event-demo-2.js
:::