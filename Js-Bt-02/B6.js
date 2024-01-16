let a = +prompt("Nhập 1 số")
let number = 0
while(a>1){
    let b = Math.floor(a%10)
    a = a/10
    number = number*10+b
}
console.log(number)
