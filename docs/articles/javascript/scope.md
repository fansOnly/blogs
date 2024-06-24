# 作用域

---

<br />

#### 1. 作用域是什么

在 javascript 中，作用域指的是在当前的执行上下文，其中的值和表达式可被访问。

<br />

#### 2. 作用域的分类

- 全局作用域
- 模块作用域
- 函数作用域

另外，由 let 或 const 声明的变量、或者一对花括号创建的作用域成为<b>块级作用域</b>。

::: warning 注意
javascript 中的作用域属于静态作用域，在函数定义时，其作用域已经确定了。
:::

<br />

#### 3. 执行上下文

当在代码执行阶段执行到一个函数的时候，就会进行准备工作，这里的“准备工作”，就叫做"执行上下文(EC)"，也叫执行上下文环境，也叫执行环境。js 引擎创建了执行上下文栈（Execution context stack，ECS）来管理执行上下文。

处于活动状态的执行上下文环境只有一个, 只有栈顶的上下文处于活动状态，执行其中的代码。函数每调用一次，都会产生一个新的执行上下文环境。全局上下文在代码开始执行时就创建，只有唯一的一个，永远在栈底，浏览器窗口关闭时出栈。

当调用一个函数时，一个新的执行上下文就会被创建。而一个执行上下文的生命周期可以分为两个阶段：

::: info 创建阶段

1. 创建变量对象
2. 生成作用域链
3. 确定 this 指向
   :::

::: tip 执行阶段

1. 变量赋值
2. 函数引用
3. 执行其他代码
   :::

<br />

#### 4. 执行上下文环境

执行上下文可以理解为当前代码的执行环境，JavaScript 中的运行环境大概包括三种情况：

- 全局环境：JavaScript 代码运行起来会首先进入该环境
- 函数环境：当函数被调用执行时，会进入当前函数中执行代码
- eval

<br />

##### 思考 ①

::: info 尝试理解下述代码的执行过程

```js
var a = 1;
function out() {
  var b = 2;
  function inner() {
    var c = 3;
    console.log(a + b + c);
  }
  inner();
}
out();
```

:::

::: details 查看答案

1. 当代码开始执行时就创建全局执行上下文环境，全局上下文入栈。
2. 全局上下文入栈后，其中的代码开始执行，进行赋值、函数调用等操作，执行到 out()时，激活函数 out 创建自己的执行上下文环境，out 函数上下文入栈。
3. out 函数上下文入栈后，其中的代码开始执行，进行赋值、函数调用等操作，执行到 inner()时，激活函数 inner 创建自己的执行上下文环境，inner 函数上下文入栈。
4. inner 函数上下文入栈后，其中的代码开始执行，进行赋值、函数调用、打印等操作，由于里面没有可以生成其他执行上下文的需要，所有代码执行完毕后，inner 函数上下文出栈。
5. inner 函数上下文出栈，又回到了 out 函数执行上下文环境，接着执行 out 函数中后面剩下的代码，由于后面没有可以生成其他执行上下文的需要，所有代码执行完毕后，out 函数上下文出栈。
6. out 函数上下文出栈后，又回到了全局执行上下文环境，直到浏览器窗口关闭，全局上下文出栈。
   :::

<br />

##### 思考 ②

::: info 尝试理解下述代码的执行过程

```js
var str = 'global value';
function fn() {
  var str2 = 'local value';
  return str2;
}
fn();
```

:::

::: details 查看答案

1. 函数 fn 被创建，保存作用域链到内部属性 [[scope]]，伪代码如下

```js
// 上下文执行栈
ECStack = {
  GlobalContext // 全局执行上下文
}
fn.[[scope]] = {
  GlobalContext: VO // 全局执行上下文作为变量对象（Variable Object）
}
```

2. 执行 fn 函数，创建函数执行上下文，并将函数执行上下文压入栈顶

```js
ECStack = {
  fnContext, // 函数执行上下文
  GlobalContext,
};
```

3. 复制函数 [[scope]] 属性创建作用域链

```js
fnContext = {
  Scope: fn.[[scope]]
}
```

4. 创建活动对象 AO（Activity Object），创建 arguments 对象，创建函数声明和变量声明

```js
fnContext = {
  AO: {
    arguments: {
      length: 0,
    },
    str2: undefined,
  },
  Scope: [Scope],
};
```

5. 将活动对象 AO 压入作用域链

```js
fnContext = {
  AO: {
    arguments: {
      length: 0,
    },
    str2: undefined,
  },
  Scope: [AO, Scope],
};
```

6. 执行函数，str2 赋值

```js
fnContext = {
  AO: {
    arguments: {
      length: 0,
    },
    str2: 'local value',
  },
  Scope: [AO, Scope],
};
```

7. 函数执行完，将函数执行上下文弹出

```js
ECStack = {
  GlobalContext,
};
```

:::

<br />

##### 思考 ③

::: info 尝试理解下述代码的执行上下文
```js
let a = 20;
const b = 30;
var c;
function multiply(e, f) {
  var g = 20;
  return e * f * g;
}
c = multiply(20, 30);
```
:::

::: details 查看答案

1. 全局执行上下文

```js
GlobalExecutionContext = {
  ThisBinding: <GLobal Object>,
  LexicalEnvironment: { // 词法环境
    EnvironmentRecord: {
      Type: 'Object',
      a: <uninitialized>,
      b: <uninitialized>,
      multiply: <func>
    },
    outer: null
  },
  VariableEnvironment: { // 变量环境
    EnvironmentRecord: {
      Type: 'Object',
      c: undefined
    },
    outer: null
  }
}
```

2. 函数执行上下文

```js
FunctionExecutionContext = {
  ThisBinding: <GLobal Object>,
  LexicalEnvironment: {
    EnvironmentRecord: {
      Type: 'Declarative',
      Arguments: {
        0: 20,
        1: 30,
        length: 2
      }
    },
    outer: <GlobalLexicalEnvironment>
  },
  VariableEnvironment: {
    EnvironmentRecord: {
      Type: 'Declarative',
      g: undefined
    },
    outer: <GlobalLexicalEnvironment>
  }
}
```

:::
