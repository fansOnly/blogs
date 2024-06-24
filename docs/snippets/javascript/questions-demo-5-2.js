function throttle(fn, wait) {
  let timer;
  return function () {
    if (timer) return;
    timer = setTimeout(() => {
      fn();
      timer = null;
    }, wait);
  };
}

// demo
function scroll() {
  // ...
}
window.addEventListener('scroll', throttle(scroll, 100))