class EventBus {
  constructor() {
    this.events = new Map()
  }

  on(name, fn) {
    if (this.events.has(name)) {
      const arr = this.events.get(name) || []
      this.events.set(name, arr.concat(fn))
    } else {
      this.events.set(name, [fn])
    }
  }

  off(name, fn) {
    if (!this.events.has(name)) return
    if (fn === undefined) this.events.delete(name)
    const arr = this.events.get(name)
    const rest = arr.filter(item => item !== fn)
    if (rest.length) {
      this.events.set(name, rest)
    } else {
      this.events.delete(name)
    }
  }

  once(name, fn) {
    const self = this
    function f(...args) {
      fn(args)
      self.off(name, f)
    }
    this.on(name, f)
  }

  emit(name, ...args) {
    const arr = this.events.get(name)
    if (arr.length) {
      arr.forEach(fn => fn.apply(this, args))
    }
  }
}

const evtbus = new EventBus()

function f1(val) {
  console.log(`this is f1 function param value ${val}`)
}

function f2(val) {
  console.log(`this is f2 function param value ${val}`)
}

function f3(val) {
  console.log(`this is f3 function param value ${val}`)
}

evtbus.on('change', f1)
evtbus.on('change', f2)
evtbus.once('change', f3)

evtbus.emit('change', 'tomorrow')

console.log(evtbus)