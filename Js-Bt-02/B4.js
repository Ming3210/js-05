let a = prompt("Nhập a")
let sum = 0
let i =1
while(sum < a){
    
    if(i%2==0){

        sum += i*i
    }
    i++
}
console.log(sum-(i-1)*(i-1))
