function fun(n, o) {
  console.log(o)
  return {
    fun: function(m) {
      return fun(m, n)
    }
  }
}

var a = fun(0); // o = undefined, n = 0 => fun(m, 0)
a.fun(1); // m = 1 => fun(1, 0) => o = 0, n = 1
a.fun(2); // m = 2 => fun(2, 0) => o = 0, n = 2
a.fun(3) // m = 3 => fun(3, 0) => o = 0, n = 3

var b = fun(0).fun(1).fun(2).fun(3)
// .fun(0) => o = undefined, n = 0 => fun(m, 0)
// .fun(1) => m = 1 => fun(1, 0) => o = 0, n = 1 => fun(m, 1)
// .fun(2) => m = 2 => fun(2, 1) => o = 1, n = 2 => fun(m, 2)
// .fun(3) => m = 3 => fun(3, 2) => o = 2, n = 3 => fun(m, 3)

var c = fun(0).fun(1);
// .fun(0) => o = undefined, n = 0 => fun(m, 0)
// .fun(1) => m = 1 => fun(1, 0) => o = 0, n = 1 => fun(m, 1)
c.fun(2); // m = 2 => fun(2, 1) => o = 1, n = 2
c.fun(3) // m = 3 => fun(3, 1) => o = 1, n = 3