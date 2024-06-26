# 响应式设计{#title}

---

### 定义{#definition}

响应式网页设计的概念（responsive web design，RWD），RWD 指的是允许 Web 页面适应不同屏幕宽度因素等，进行布局和外观的调整的一系列实践。

<br />

---

### 实现方式{#methods}

<br />

#### 1.媒体查询{#media-queries}

```css
@media screen and (min-width: 800px) {
  .container {
    margin: 1em 2em;
  }
}
```

<br />

---

#### 2. 百分比布局{#percentage}

- 子元素的 width 和 height 百分比参考对象是父元素的 width 和 height
- 子元素的 margin、padding 的参考对象为父元素的 width
- 子元素的 border-radius、background-size、transform: translate()、transform-origin 的参考对象为自身宽高

```css
.outer {
  width: 200px;
  height: 80px;
}
.inner {
  width: 50%;
  height: 50%;
  margin: 10%;
  padding: 10%;
  border-radius: 5%;
}
/* 
* inner 元素的属性计算如下：
* width = 200 * 50% = 100px
* height = 80 * 50% = 40px
* margin = 200 * 10% = 20px
* padding = 200 * 10% = 20px
* border-radius = 100 * 5% = 5px
*/
```

<br />

---

#### 3. 使用 em 单位{#em}

em 单位是一个相对的测量单位，用于测量网页上元素的大小，主要是字体大小。因为它是相对于其父元素而言的，所以 1 个 em 等于父元素中设置的字体大小。

```css
.outer {
  font-size: 16px;
}
.inner {
  font-size: 2em;
}
/* inner 元素的字体大小为：2 * 16 = 32px */
```

<br />

---

#### 4. 使用 rem 单位{#rem}

rem（font size of the root element）是指相对于根元素的字体大小的单位，如果我们设置 html 的 font-size 为 16px，则如果需要设置元素字体大小为 16px，则写为 1rem。

```js
export function setRootSize() {
  document.documentElement.style.fontSize = (100 * window.innerWidth) / 375 + 'px';
  window.addEventListener('load', function () {
    setTimeout(() => {
      document.documentElement.style.fontSize = (100 * window.innerWidth) / 375 + 'px';
      window.unit = (100 * window.innerWidth) / 375;
      let e = document.createEvent('Event');
      e.initEvent('adjustReady', true, true);
      window.dispatchEvent(e);
    }, 480);
  });
  window.onresize = () => {
    setTimeout(() => {
      document.documentElement.style.fontSize = (100 * window.innerWidth) / 375 + 'px';
    }, 480);
  };
  window.addEventListener('orientationchange', () => {
    setTimeout(() => {
      document.documentElement.style.fontSize = (100 * window.innerWidth) / 375 + 'px';
    }, 480);
  });
}
```

<br />

---

#### 5. flexible 适配方案{#flexible}

<br />

---

#### 6. 使用视口单位{#vw}

vw 是相对单位，1vw 表示屏幕宽度的 1%。
