let a = prompt("Nhập số hàng")
for(let i = a;i>=0;i--){
    let b =""
    for(let j= 0;j<=i;j++){
        b +="*"
    }
    console.log(b)
}
for (let i = a; i >=0; i--) {
    let b = "";
    for (let j = 1; j <= a - i; j++) {
        b += " ";
    }
    for (let k = 1; k <= i; k++) {
        b += "*";
    }
    console.log(b);
}
