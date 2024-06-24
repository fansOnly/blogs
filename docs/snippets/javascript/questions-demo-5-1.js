function debounce(fn, wait) {
  let timer;
  return function () {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
      timer = null;
    }, wait);
  };
}


// demo
function typing() {
  // ...
}
window.addEventListener('input', debounce(typing, 200))