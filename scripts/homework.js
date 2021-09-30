function task_2() {
  let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  let code = '';
  for (let i = 0; i < 6; i++) {
    let index = parseInt(arr.length * Math.random());
    code += arr[index];
  }
  return code;
}
console.log(task_2());

function task_1(a, b, c) {
  let arr = [a, b, c];
  if (typeof (a + b + c) == 'number') {
    arr.sort(function (a, b) {
      return a - b;
    });
    return arr[0] + '<' + arr[1] + '<' + arr[2];
  } else {
    return '包含非数字参数';
  }
}
console.log(task_1(3, 15, 1));

/*
let a = 1;
function f1() {
  let b = 2;
  let c = '2';
  function f2() {
    let a = 0;
    let d = a + b + c;
    console.log(d);
  }
  f2();
}
f1();

let index = 0;
let arr = ['z', 'l', 'w'];
let str = '';
switch (index) {
  case '1':
    str = arr[0];
  case 0:
    str = arr[1];
  default:
    str = arr[2];
}
console.log(str);
*/

/*
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
*/
