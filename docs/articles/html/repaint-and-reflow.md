# 重绘和重排{#title}

---

### 重绘{#repaint}

浏览器重新绘制网页以显示 UI 更新后的视觉效果。重绘不一定导致重排。

触发重绘的常见操作：

- <code>visibility</code>
- <code>background</code>、<code>color</code>
- <code>outline</code>
- <code>border-style</code>

<br />

---

### 重排{#reflow}

重排发生在浏览器重新计算网页的某些部分的位置和几何形状时，这通常紧接着重绘。

触发重绘的常见操作：

- 页面初始渲染
- 添加、删除元素
- 改变元素的位置
- 改变元素尺寸
- 改变元素内容
- 改变字体大小
- 改变窗口尺寸
- 添加伪类
- 设置 style 属性的值
- 获取某些属性、调用某些计算方法

<br />

---

### 如何减少重绘和重排{#tip}

- 离线操作 <code>DOM</code>，使用 <code>Fragment</code> 操作 <code>DOM</code> 等

  ```js
  // eg.
  el.style.display = 'none';
  el.appendChild(li);
  ```

- 通过 <code>className</code> 改变样式

  ```js
  // BAD ❌
  el.style.color = 'red';

  // GOOD ✅
  el.className = 'xx';
  ```

- 脱离文档流
  ```js
  // eg.
  el.style.position = 'absolute';
  ```
- 读取缓存值
- GPU 加速：使用 <code>transform</code> / <code>opacity</code> / <code>filter</code> 等属性
