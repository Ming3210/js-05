let a = +prompt("Nhập a")
let b = +prompt("Nhập b")
let sum = 0
if( a > b ){
    for( i = b+1; i < a; i++ )
    {
        sum += i
    }
}else if( a < b) {
    for( i = a+1; i < b; i++ )
    {
        sum += i
    }
}else sum = 0
console.log( sum)