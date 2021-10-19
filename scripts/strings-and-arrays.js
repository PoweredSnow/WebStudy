/*
let str = 'no zuo no die';
let arr = [];
arr = str.split(' ');
let arr2 = [];
arr.forEach(function (el, i, arr1) {
  let firstChar = el[0].toUpperCase();
  let newStr = firstChar + el.slice(1);
  arr2.push(newStr);
});
str = arr2.join(' ');
console.log(str);
*/

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
  arr.forEach(function (el, i, arr1) {
    document.write('<tr>');
    el.forEach(function (val, j, arr2) {
      if (j == 2) {
        arr[i][j] = arr[i][j].slice(0, 5) + '……';
      }
      document.write('<td>' + arr[i][j] + '</td>');
    });
    document.write('</tr>');
  });
  document.write('</table>');
}
createTable(5, 3, 500, 300, array);

let arr = [1, 2, 3, 4];
arr.forEach(function (value, index, att) {
  console.log(value); //数组元素
  console.log(index); //数组下标
  console.log(att); //原始数组
});
*/

/**
 * unshift(被添加元素); push(被添加元素);
 */
/*
let currentDay = '星期四';
let dayList = [currentDay];
let AddListFront = ['星期一', '星期二', '星期三'];
let AddListBehind = ['星期五', '星期六', '星期日'];
for (let i = AddListFront.length - 1; i >= 0; i--) {
  dayList.unshift(AddListFront[i]);
}
for (let i = 0; i < AddListBehind.length; i++) {
  dayList.push(AddListBehind[i]);
}
console.log(dayList);

let arr1 = ['hello', 'world'];
let arr2 = ['hello', 'javascript'];
let arr3 = ['arr3'];
*/
/**
 * arr.concat(arr1, arr2);
 * 会将 arr,arr1,arr2 合并，得到一个新数组，但是不会对 arr 产生影响
 */
/*
let arr4 = arr1.concat(arr2, arr3);
console.log(arr4);
*/

/**
 * arr.splice(删除数组元素的索引位置, 被删除元素的个数, 新添加的元素);
 * 从指定的索引位置，删除指定个数的数组元素 arr.splice(inex, number);
 * arr.splice(index, 0, "新元素");
 * 在指定的索引位置，添加新的元素
 * 前两个参数是必须参数，后面参数可选
 * 返回值是被删除元素组成的新数组
 */
/*
let userList = ['zhangsan', 'lisi', 'cainiao', 'wangwu', 'zhaoliu'];
let index = userList.indexOf('cainiao');
let result = userList.splice(index, 3);
console.log(result);
userList.splice(1, 0, 'liuneng');
console.log(userList);
*/

// let userList = ['zhangsan', 'lisi', 'wangwu', 'zhaoliu'];
/**
 * arr.shift() 删除数组的第一个元素，数组的长度减 1，
 * 返回值为被删除的数组元素
 */
// let result = userList.shift();
/**
 * arr.pop() 删除数组的最后一个元素
 */
// let result1 = userList.pop();

/*
let str = '?username=zhangsan&age=20&sex=male';
str = str.slice(1);
// 字符串.split("分隔符");
// 把字符串以特定分隔符分割，生成子字符串
// 作为数组的数组元素，生成一个数组
let arr = str.split('&');
let newStr = '?' + arr.join('&');
// 数组.join("分隔符");
// 参数：指定使用的分隔符。如果省略，则使用逗号作为分隔符。
// 把数组中的数组元素，用特定的分隔符连接成一个字符串
*/

/*
let userList = ['zhangsan', 'lisi', 'wangwu'];
userList = userList.join('&');
let newList = userList.split('&');
*/

/*
let str = '0123456789qwertyuiopasdfghjklzxcvbnm';
let len = str.length;
let colorStr = '#';
for (let i = 0; i < 6; i++) {
  let index = parseInt(len * Math.random());
  colorStr += str[index];
}
console.log(colorStr);
document.body.style.background = colorStr;
*/

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
