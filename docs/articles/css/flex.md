# Flex 弹性布局{#title}

---

### 定义{#definition}

Flexible Box 模型，通常被称为 flexbox，是一种一维的布局模型。它给 flexbox 的子元素之间提供了强大的空间分布和对齐能力

<br />

---

### 属性{#property}

- <code>display</code> 设置：
  - <code>flex</code>
  - <code>inline-flex</code>
- <code>flex-direction</code> 设置：

  这个属性指定了内部元素是如何在弹性容器中布局的，定义了主轴的方向（正方向或反方向）。

  - <code>row</code>
  - <code>row-reverse</code>
  - <code>column</code>
  - <code>column-reverse</code>

- <code>flex-wrap</code> 设置：

  这个属性指定 flex 元素单行显示还是多行显示。如果允许换行，这个属性允许你控制行的堆叠方向。

  - <code>wrap</code>
  - <code>nowrap</code>
  - <code>wrap-reverse</code>

- <code>order</code> 设置：

  这个属性规定了弹性容器中的可伸缩项目在布局时的顺序。元素按照 order 属性的值的增序进行布局。拥有相同 order 属性值的元素按照它们在源代码中出现的顺序进行布局。

  - <code>number</code>，eg. 1 / -1

- <code>align-items</code> 设置：

  这个属性设置了所有直接子元素的 align-self 值作为一个组。在 Flexbox 中，它控制子元素在交叉轴上的对齐。在 Grid 布局中，它控制了子元素在其网格区域内的块向轴上的对齐。

  - <code>flex-start</code>
  - <code>center</code>
  - <code>flex-end</code>
  - <code>stretch</code>

- <code>justify-content</code> 设置：

  这个属性定义浏览器如何沿着弹性容器的主轴和网格容器的行向轴分配内容元素之间和周围的空间。

  - <code>flex-start</code>
  - <code>center</code>
  - <code>flex-end</code>
  - <code>space-between</code>
  - <code>space-around</code>

<br />

---

### 简写属性{#shorthand}

当设置<code>flex</code> 为 <code>auto / 0 / 1</code>，包含以下三个属性：

- <code>flex-grow</code>

  这个属性规定了 flex-grow 项在 flex 容器中分配剩余空间的相对比例。剩余空间是 flex 容器的大小减去所有 flex 项的大小加起来的大小。如果所有的兄弟项目都有相同的 flex-grow 系数，那么所有的项目将剩余空间按相同比例分配，否则将根据不同的 flex-grow 定义的比例进行分配。

- <code>flex-shrink</code>

  这个属性指定了 flex 元素的收缩规则。flex 元素仅在默认宽度之和大于容器的时候才会发生收缩，其收缩的大小是依据 flex-shrink 的值。

- <code>flex-basis</code>

  这个属性指定了 flex 元素在主轴方向上的初始大小。如果不使用 box-sizing 改变盒模型的话，那么这个属性就决定了 flex 元素的内容盒（content-box）的尺寸。


<br />

---

##### 思考 ①{#example-1}

如何使用 flex 布局实现水平垂直居中?

::: details 查看答案
```css
.outer {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.inner {
  width: 200px;
  height: 50px;
  border: 1px solid #000;
}
```
:::