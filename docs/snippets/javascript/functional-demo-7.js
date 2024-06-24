// demo
function bindEvent(ele, type, fn) {
  if (window.addEventListener) {
    bindEvent = function(ele, type, fn) {
      ele.addEventListener(ele, type, fn)
    }
  } else if (window.attachEvent) {
    bindEvent = function(ele, type, fn) {
      ele.attachEvent('on'+type, fn)
    }
  } else {
    bindEvent = function(ele, type, fn) {
      ele['on'+type] = fn
    }
  }

  return bindEvent
}

const div = document.getElementById('div')
const p = document.getElementById('p')

bindEvent(div, 'click', () => {})
bindEvent(p, 'click', () => {})