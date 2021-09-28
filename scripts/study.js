let str = '0123456789qwertyuiopasdfghjklzxcvbnm';
let len = str.length;
let colorStr = '#';
for (let i = 0; i < 6; i++) {
  let index = parseInt(len * Math.random());
  colorStr += str[index];
}
console.log(colorStr);
document.body.style.background = colorStr;

/*
let array = [
  ['first', 'a', 'abcdefg'],
  ['second', 'b', 'abcdefg'],
  ['third', 'c', 'abcdefg'],
  ['forth', 'd', 'abcdefg'],
  ['fifth', 'e', 'abcdefg'],
];
function createTable(x, y, w, h, arr) {
  document.write('<table border="1" width="' + w + '" height="' + h + '" cellspacing="0">');
  for (let i = 0; i < x; i++) {
    document.write('<tr>');
    for (let j = 0; j < y; j++) {
      document.write('<td>' + arr[i][j] + '</td>');
    }
    document.write('</tr>');
  }
  document.write('</table>');
}
createTable(5, 3, 500, 300, array);
*/

/*
// arr.sort() 传入函数，数组元素排序
// arr.reverse() 数组元素反序
let arr = [3, 2, 1, 5, 7, 15];
let arr1 = arr.sort(function (a, b) {
  return a - b;
});
console.log(arr1.reverse());
*/

/*
let str = 'Hello, javascript!';
str = str.toLowerCase();
console.log(str);
str = str.toUpperCase();
console.log(str);
*/

/*
// str.split（分隔符）
let str = '?username=zhangsan&age=20&sex=male';
str = str.slice(1);
let arr = str.split('&');
for (let i = 0; i < arr.length; i++) {
  let childArr = arr[i].split('=');
  console.log(childArr);
}
*/

/*
let str = 'nice to meet you';
// str.slice(start, end)
// 截取字符串包含 start 位置字符
// 不包含 end 位置字符
let childstr = str.slice(0, 4);
console.log(childstr);
let str1 = str.slice(0, str.length);
console.log(str1);
// str.slice(start)
// 截取结果为从截取起始到整个字符串结束
let str2 = str.slice(0);
console.log(str2);
// 设定负值，表示从右向左，确定索引位置
let str3 = str.slice(-3);
console.log(str3);
let preview = str.slice(0, 7) + '...';
console.log(preview);
*/

/*
let str = 'Hello, javascript!';
for (let i = 0; i < str.length; i++) {
  // console.log(str[i]);
  console.log(str.charAt(i));
}
let index = str.indexOf('java');
console.log(index);
console.log(str.slice(index));

let btn = document.getElementById('btn');
let caculate = document.getElementById('caculate');
btn.onclick = function () {
  alert(eval(caculate.value));
};
*/

/*
let r = function (a, b) {
  let r = a + b;
  // return r;
};
console.log(r);
window.onload = function () {
  //页面加载完成以后，执行的一系列动作
};
*/

/*
let a = '123.456img';
let b = true;
*/

/*
隐式转换
加一个！代表获取变量的相反布尔值，
加两个 !! 代表获取变量本身的布尔值
隐式转换为数值类型最简单的方法就是  *1
隐式转换为字符串类型最简单的方法就是  ""+  拼接
if (!isNaN(b)) {
  //   document.write('第一条语句执行');
  //   document.write('<br />');
  //   document.write('第二条语句执行');
  console.log(parseInt(a));
  console.log(parseFloat(a));
  console.log(Number(3.1415926 + ''));
  console.log(String(NaN));
  console.log(Boolean('img' + 3 + '.jpg'));
}
*/

/*
function createTable(a, b, w) {
  document.write('<table border="1" width="' + w + '" cellspacing="0">');
  let i = 0;
  while (i < a) {
    document.write('<tr>');
    for (let j = 0; j < b; j++) {
      document.write('<td>&nbsp;&nbsp;&nbsp;</td>');
    }
    i++;
  }
}
createTable(6, 6, 666);
*/
