let n = prompt("Nhập 1 số")
let sum = 0
let fn1 = 0
let fn2 = 1

// 0 1 1 2 3 5 8
while (fn2 < n) {
   let fn = fn1 + fn2
   
   console.log(fn1)
   if(fn>n) console.log(fn2)
   fn1 = fn2
   fn2 = fn
}