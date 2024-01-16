let n = prompt("Nhập n")
let sum = 0
let m = 1
for(let i = 1; i <= n-1;i++){
    sum +=m
    m=m*10
    for(let j =0;j <= i;j++){
        m++
    }
    console.log("m="+m)
}
sum +=m
console.log(sum)