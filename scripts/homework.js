let a = 8,
  b = 15;
let c = a > b ? a < b : a > b;
console.log(c);
for (let i = 0; i < 4; i++) {
  if (i == 1) {
    continue;
  }
  if (i == 3) {
    break;
  }
  console.log(i);
}
let s1 = parseInt('101zhongxue');
console.log(s1);
let d;
console.log(d);
let x = 3;
let y = 2;
let z = (x + 2) / y;
console.log(z);
for (let i = 1; i < 7; i++) {
  if (i == 3) {
    document.write('<h' + i + '>' + '三级标题' + '</h' + i + '>');
    continue;
  }
  document.write('<h' + i + '>' + i + '级标题' + '</h' + i + '>');
}
