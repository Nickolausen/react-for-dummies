let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// Expected output: 10

console.log(b);
// Expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// Expected output: Array [30, 40, 50]

// 👹 Posso inserire dati eterogenei all'interno di uno stesso vettore
let c = [2, "5", 'f', false, { p1: 2, p2: "true" }]
console.log(c)