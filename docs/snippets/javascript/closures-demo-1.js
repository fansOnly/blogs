// 解决方案 - 匿名闭包嵌套
for (var i = 0; i < 5; i++) {
  (function(i) {
    setTimeout(() => {
      console.log(i)
    }, 1000);
  })(i)
}

// 解决方案 - 使用 let
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i)
  }, 1000);
}

// 解决方案 - 函数传参
for (var i = 0; i < 5; i++) {
  setTimeout((i) => {
    console.log(i)
  }, 1000, i);
}