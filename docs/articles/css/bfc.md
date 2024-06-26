# 块级格式上下文{#title}

---

### BFC 的定义{#definition}

<b>块级格式上下文</b>（Block Formatting Context，BFC）是 Web 页面的可视 CSS 渲染的一部分，是块级盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。

下列方式会创建块格式化上下文：

- 文档的根元素（<code>html</code>）
- 浮动元素（即 <code>float</code> 值不为 <code>none</code> 的元素）
- 绝对定位元素（<code>position</code> 值为 <code>absolute</code> 或 <code>fixed</code> 的元素）
- 行内块元素（<code>display</code> 值为 <code>inline-block</code> 的元素）
- <code>overflow</code> 值不为 <code>visible</code> 或 <code>clip</code> 的块级元素。
- 部分表格元素（<code>display</code> 值为 <code>table</code> 或 <code>table-cell</code> 或 <code>table-caption</code>）
- 弹性元素（<code>display</code> 值为 <code>flex</code> 或 <code>inline-flex</code> 元素的直接子元素）
- 网格元素（<code>display</code> 值为 <code>grid</code> 或 <code>inline-grid</code> 元素的直接子元素）

<br />

---

### BFC 的作用{#effect}

- 包含内部浮动
- 排除外部浮动
- 阻止外边距重叠