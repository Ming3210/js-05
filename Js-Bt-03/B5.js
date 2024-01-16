let n = +prompt("Nhập n")
let count = 0
while(n>1) {
    let m = Math.floor(n%10)
    console.log(m)
    n = n/10
    if(m%2==0){ 
        console.log("m="+m)
        count++}
}
console.log("Số chữ số chẵn = " +count)