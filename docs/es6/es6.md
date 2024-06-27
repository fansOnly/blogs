# ECMAScript 2015（ES6）{#title}

---

### 新增语法{#property}

<br />

#### 1. let 和 const 声明

- <code>let</code> 声明用于声明可重新赋值的块级作用域局部变量，并且可以选择将其初始化为一个值
- <code>const</code> 声明用于声明块作用域的局部变量，通常情况下它代表一个常量值，不能被重新赋值。但是如果常量是一个对象，它的属性可以被添加、更新或删除
- <code>const</code> 声明一个变量时必须初始化一个值
- <code>let</code>、<code>const</code> 声明的变量，存在暂存性死区，在声明之前不能被访问，尝试访问会抛出 <code>ReferenceError</code> 错误
- <code>let</code>、<code>const</code> 声明的变量不能被同一个作用域中的任何其他声明重复声明

<br />

---

<br />

#### 2. 箭头函数{#arrow-function}

箭头函数表达式的语法比传统的函数表达式更简洁，在用法上也有一些限制：

- 箭头函数的 <code>this</code> 指向在声明时就确定了，指向其父级作用域
- 箭头函数没有独立的 <code>this</code>、<code>arguments</code> 和 <code>super</code> 绑定，并且不可被用作方法。
- 箭头函数不能用作构造函数。使用 <code>new</code> 调用它们会引发 <code>TypeError</code>。它们也无法访问 <code>new.target</code> 关键字。
- 箭头函数不能在其主体中使用 <code>yield</code>，也不能作为生成器函数创建。

```js
// 传统函数
function add(a, b) {
  return a + b;
}
// 箭头函数
const add2 = (a, b) => {
  return a + b;
};
```

<br />

---

<br />

#### 3. 解构赋值{#destructuring-assignment}

解构赋值可以将数组中的值或对象的属性取出，赋值给其他变量。

- 基本赋值

```js
let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// Expected output: 10

console.log(b);
// Expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// Expected output: Array [30, 40, 50]
```

- 赋值给新的变量名

```js
const o = { p: 42, q: true };
const { p: foo, q: bar } = o;

console.log(foo); // 42
console.log(bar); // true
```

- 赋值到新的变量名并提供默认值

```js
const { a: aa = 10, b: bb = 5 } = { a: 3 };

console.log(aa); // 3
console.log(bb); // 5
```

- 从作为函数参数传递的对象中提取属性

```js
const user = {
  id: 42,
  displayName: 'jdoe',
  fullName: {
    firstName: 'Jane',
    lastName: 'Doe',
  },
};

function userId({ id }) {
  return id;
}

console.log(userId(user)); // 42
```

<br />

---

<br />

#### 4. 展开语法{#spread-syntax}

可以在函数调用/数组构造时，将数组表达式或者 <code>string</code> 在语法层面展开；还可以在构造字面量对象时，将对象表达式按 <code>key-value</code> 的方式展开。

- 函数传参时，可以将数组、对象展开为多个子参数
- 快速构造字面量数组、对象
- 实现浅拷贝，效果同 <code>Object.assign()</code>
- 快速连接多个数组

<br />

---

<br />

#### 5. 剩余参数{#rest-parameters}

剩余参数语法允许我们将一个不定数量的参数表示为一个数组。

```js
function sum(...theArgs) {
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total;
}

console.log(sum(1, 2, 3));
// Expected output: 6
```

- 剩余参数和 <code>arguments</code> 对象的区别

  1. 剩余参数只包含那些没有对应形参的实参，而 <code>arguments</code> 对象包含了传给函数的所有实参。
  2. <code>arguments</code> 对象不是一个真正的数组，而剩余参数是真正的 <code>Array</code> 实例，也就是说你能够在它上面直接使用所有的数组方法，比如 <code>sort</code>，<code>map</code> 等。
  3. <code>arguments</code> 对象还有一些附加的属性（如 <code>callee</code> 属性）。

- 剩余参数可以被解构

```js
function f(...[a, b, c]) {
  return a + b + c;
}

f(1); // NaN (b and c are undefined)
f(1, 2, 3); // 6
```

<br />

---

<br />

#### 6. 模版字符串{#template-string}

<br />

---

<br />

#### 7. 对象字面量{#object-literal}

<br />

---

<br />

#### 8. 函数默认参数{#function-default-parameters}

函数默认参数允许在没有值或 <code>undefined</code> 被传入时使用默认形参。

```js
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5, 2));
// Expected output: 10

console.log(multiply(5));
// Expected output: 5
```

<br />

---

<br />

#### 9. Promise{#promise}

TODO: 后续完善

<!-- [Promise 专题]('./promise.md') -->

<br />

---

<br />

#### 10. Proxy{#proxy}

Proxy 对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）。

```js
const handler = {
  get: function (obj, prop) {
    return prop in obj ? obj[prop] : 37;
  },
};

const p = new Proxy({}, handler);
p.a = 1;
p.b = undefined;

console.log(p.a, p.b);
// Expected output: 1, undefined
console.log("c" in p, p.c);
// Expected output: false, 37
```

<br />

---

<br />

#### 11. 生成器函数{#generator-function}

1. 生成器函数允许你定义一个非连续执行的函数作为迭代算法。生成器函数使用 function* 语法编写。

2. 最初调用时，生成器函数不执行任何代码，而是返回一种称为生成器的特殊迭代器。通过调用 next() 方法消耗该生成器时，生成器函数将执行，直至遇到 yield 关键字。

3. 可以根据需要多次调用该函数，并且每次都返回一个新的生成器，但每个生成器只能迭代一次。

```js
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generator();

console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().value); // output ?
```

<br />

---

<br />

#### 12. 类{#classes}

类是用于创建对象的模板。它们用代码封装数据以对其进行处理。

- 构造函数：

  <code>constructor</code> 方法是用于创建和初始化一个由类创建的对象的特殊方法，使用 <code>super</code> 关键字来调用父类的构造函数

  ```js
  class Polygon {
    constructor(height, width) {
      this.name = "Rectangle";
      this.height = height;
      this.width = width;
    }
    sayName() {
      console.log("Hi, I am a ", this.name + ".");
    }
    get area() {
      return this.height * this.width;
    }
    set area(value) {
      this._area = value;
    }
  }

  class Square extends Polygon {
    constructor(length) {
      // 这里，它调用父类的构造函数并传入 length
      // 作为 Polygon 的 height, width
      super(length, length);

      // 注意：在派生的类中，在你可以使用 'this' 之前，必须先调用 super()。
      // 现在可以使用 'this' 了，忽略 'this' 将导致引用错误（ReferenceError）
      this.name = "Square";
    }
  }
  ```

- 类的方法：

  被定义在类实例的原型上并且被所有实例共享。方法可以是普通函数、异步函数、生成器函数或异步生成器函数

  ```js
  class Cat {
    constructor(age, color) {
      this.age = age;
      this.color = color;
    }
    say() {
      console.log('hello~')
    }
  }

  const xiaobai = new Cat(1, 'white')
  const xiaohei = new Cat(5, 'black')
  xiaobai.say() // output ?
  xiaohei.say() // output ?
  ```

- 静态方法或字段：

  通过 <code>static</code> 关键字定义，类的实例不能继承静态属性

  ```js
  class Cat {
    constructor(age, color) {
      this.age = age;
      this.color = color;
    }
    static variety = 'lanmao'
    static say() {
      console.log('喵喵喵~~~')
    }
  }
  const xiaobai = new Cat(1, 'white');

  console.log(xiaobai.variety) // output ?
  console.log(xiaobai.say) // output ?

  console.log(Cat.variety) // output ?
  console.log(Cat.say()) // output ?
  ```

- 字段声明：

  类字段与对象属性相似，不属于变量，不需要使用 <code>let</code> 等关键字声明

  ```js
  class Cat {
    age = 1;
    color;
    constructor(age, color) {
      this.age = age;
      this.color = color;
    }
  }
  ```

- 私有属性：

  通过 <code>#</code> 号前缀声明

  ```js
  class Cat {
    #age = 1;
    #color;
    constructor(age, color) {
      this.#age = age;
      this.#color = color;
    }
  }
  ```

- 继承：

  通过 <code>extends</code> 关键字，创建一个类作为另一构造函数（类或函数）的子类

  ```js
  class Animals {
    static color = 'white'
    constructor() {
      this.legs = 4
    }
    say() {
      console.log('hou~')
    }
  }
  class Cat extends Animals {}

  const cat = new Cat()
  console.log(cat.color) // output ?
  console.log(cat.legs) // output ?
  cat.say() // output ?
  ```

<br />

---

<br />

#### 13. 数据结构 Map 和 Set{#map-and-set}

- <code>Map</code> 对象保存键值对，并且能够记住键的原始插入顺序。任何值（对象或者原始值）都可以作为键或值。

```js
const courses = new Map();
courses.set("Chinese", 100);
courses.has("Chinese"); // true
courses.get("English"); // undefined
courses.set("English", 80);
courses.get("Chinese"); // 80
courses.delete("Math"); // false
courses.delete("Chinese"); // true
console.log(courses.size); // 1
console.log(courses); // Map(1) { 'English' => 80 }
```

- <code>Set</code> 对象允许你存储任何类型（无论是原始值还是对象引用）的唯一值。

```js
const courses = new Set();
courses.add("Chinese");
courses.has("Chinese"); // true
courses.add("English");
courses.add("English");
courses.delete("Math"); // false
courses.delete("Chinese"); // true
console.log(courses.size); // 1
console.log(courses); // Set(1) { 'English' }
```