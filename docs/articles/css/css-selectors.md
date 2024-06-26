# CSS 选择器{#title}

---

### 选择器的定义{#definition}

CSS 选择器是 CSS 规则的第一部分。它是元素和其他部分组合起来告诉浏览器哪个 HTML 元素应当是被选为应用规则中的 CSS 属性值的方式。

<br />

---

### 选择器的种类{#types}

常见的选择器一般分为以下几种：

- 通配符选择符

  它选中了文档中的所有内容（或者是父元素中的所有内容，比如，它紧随在其他元素以及邻代运算符之后的时候）

```css
* {
  color: red;
}
```

- 类型选择器/元素选择器/标签选择器

```css
div {
  color: red;
}
```

- ID 选择器

```css
#div {
  color: red;
}
```

- 类选择器

```css
.div {
  color: red;
}
```

- 属性选择器

```css
div[attr='xxx'] {
  color: red;
}
```

- 伪类选择器

```css
div:hover {
  color: red;
}
```

- 伪元素选择器

```css
div::after {
  color: red;
}
```

- 运算符

  将其他选择器组合起来，更复杂的选择元素

```css
div > p.line {
  color: red;
}
```

<br />

---

### 选择器的权重{#sort}

一般情况下，我们可以使用数字对不同的选择器权重具象化，以便于对其优先级进行排序。

- !important - 10000
- inline style - 1000
- ID 选择器（#box）- 100
- 类选择器（.box），属性选择器（[type="input"]），伪类（:hover）- 10
- 元素选择器（p），伪元素（::after） - 1
- 通配符选择符（\*），关系选择符（+, >, ~, " "(后代选择器), ||），否定伪类（:not()）对优先级没有影响 - 0