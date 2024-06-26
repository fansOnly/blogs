---
outline: 5
---

# 相关面试题{#title}

---

##### 题目 ①{#Q&A-1}

如何用 CSS 实现一个三角形？

::: details 查看答案

```css
.triangle {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px;
  border-color: #f00 transparent transparent;
}
```

:::

<br />

---

##### 题目 ②{#Q&A-2}

如何用 CSS 实现一个扇形？

::: details 查看答案

```css
.sector {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px;
  border-color: #f00 transparent transparent;
  border-radius: 10px;
}
```

:::

<br />

---

##### 题目 ③{#Q&A-3}

如何实现元素水平垂直居中？

::: tip 提示

1. flex 布局，适用于子元素不定宽高的场景
2. 定位 + transform，适用于子元素不定宽高的场景
3. 定位 + margin，适用于子元素定宽高的场景
   :::

::: details 查看答案
::: code-group

```css [flex]
.outer {
  height: 300px;
  background: #eee;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.inner::after {
  content: 'hello world!';
}
```

```css [position + transform]
.outer {
  position: relative;
  height: 300px;
  background: #eee;
}
.inner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.inner::after {
  content: 'hello world!';
}
```

```css [position + margin]
.outer {
  position: relative;
  height: 300px;
  background: #eee;
}
.inner {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  
  width: 100px;
  height: 30px;
}
.inner::after {
  content: 'hello world!';
}
```

:::
