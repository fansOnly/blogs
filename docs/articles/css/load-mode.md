# CSS 的加载方式{#title}

---

<br />

- 外部样式文件链接

```css
<link href="main.css" rel="stylesheet" />
```

- 内联样式

```css
<style>
p {
  color: white;
}
</style>
```

- 行内样式

```css
<div style="color:red">red</div>
```

- 导入外部样式

```css
@import 'xx.css';
```

::: warning
在 IE 下通过 <code>@import</code> 的方式引入 CSS 文件，可能会引起无样式内容闪烁（Flash of UnStyled Content）。
:::
