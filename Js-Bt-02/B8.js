let a= +prompt("Nhập 1 số")
let count
let i = 0
while (a > 0) {
   i++
   for(let j = 1;j<=i;j++){
    if(i%j==0) count++
   }
   if(count==2) console.log(i)
   else count =0
   a--
}