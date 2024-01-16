let a = prompt("Nhập a");
let b = prompt("Nhập b");
let c = prompt("Nhập c" );
let d = prompt("Nhập d");
let uclnAB = 0;
for (let i = 1; i <= Math.min(a, b); i++) {
    if (a % i == 0 && b % i == 0) {
        uclnAB = i;
    }
}
let uclnABC = 0;
for (var j = 1; j <= Math.min(uclnAB, c); j++) {
    if (uclnAB % j == 0 && c % j == 0) {
        uclnABC = j;
    }
}
let uclnABCD = 0;
for (var k = 1; k <= Math.min(uclnABC, d); k++) {
    if (uclnABC % k == 0 && d % k == 0) {
        uclnABCD = k;
    }
}
