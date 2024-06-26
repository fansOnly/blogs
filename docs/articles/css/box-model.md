# CSS 盒模型{#title}

---

### 盒模型的概念{#definition}

- 内容盒子：显示内容的区域；使用 <code>inline-size</code> 和 <code>block-size</code> 或 <code>width</code> 和 <code>height</code> 等属性确定其大小。
- 内边距盒子：填充位于内容周围的空白处；使用 <code>padding</code> 和相关属性确定其大小。
- 边框盒子：边框盒子包住内容和任何填充；使用 <code>border</code> 和相关属性确定其大小。
- 外边距盒子：外边距是最外层，其包裹内容、内边距和边框，作为该盒子与其他元素之间的空白；使用 <code>margin</code> 和相关属性确定其大小。

<br />

---

### 常见的盒模型{#classification}

<br />

#### 1. CSS 标准盒模型

标准盒模型通过设置 CSS 属性 <code>box-sizing: content-box</code> 实现。计算盒子的内容容器宽度/高度时，只计算 <code>width/height</code> 的值。

```css
.box {
  box-sizing: content-box;
  width: 200px;
  height: 50px;
  padding: 20px;
  margin: 20px;
  border: 5px solid #333;
}
/* 盒子内容的宽度即为 width 的值: 200 */
```

![box-model-content-box](/images/css/box-model-content-box.png)

#### 2. CSS 怪异盒模型

标准盒模型通过设置 CSS 属性 <code>box-sizing: border-box</code> 实现。计算盒子的内容容器宽度/高度时，由 <code>width/height</code> 减去相应方向的 <code>padding</code> 值，减去相应方向的 <code>border-width</code> 值得出。

```css
.box {
  box-sizing: border-box;
  width: 200px;
  height: 50px;
  padding: 20px;
  margin: 20px;
  border: 5px solid #333;
}
/* 盒子内容的宽度即为 width - paddingLeft - paddingRight - borderWidthLeft - borderWidthRight 的值: 200 - 20 * 2 - 5 * 2 = 150 */
```

![box-model-border-box](/images/css/box-model-border-box.png)