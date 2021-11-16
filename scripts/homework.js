// 05. 三
      const inputList = document.getElementsByTagName('input');
      let flag = true;

      for (let i = 0; i < inputList.length; i++) {
        inputList[i].onfocus = function () {
          if (!flag) return;
          this.setAttribute('placeholder', '');
          const txt = document.getElementsByClassName('text');
          // this.parentNode.style.borderColor = '#999';
          // this.parentNode.nextElementSibling.style.color = '#333';
          switch (i) {
            case 0:
              txt[0].textContent = '支持中文数字，字符为4-20个';
              break;
            case 1:
              txt[1].textContent = '建议使用两种字符组合，6-20个字符';
              break;
            case 2:
              txt[2].textContent = '请再次输入密码';
              break;
            case 3:
              txt[3].textContent = '完成验证后，您可以使用该号找回密码';
              break;
            default:
              txt[4].textContent = '支持中文数字，字符为4-20个';
              break;
          }
        }

        inputList[i].onblur = function () {
          flag = false;
          if (this.value.length < 4 || this.value.length > 20) {
            this.parentNode.style.borderColor = 'red';
            if (i === 1 && this.value.length < 4) {
              this.parentNode.nextElementSibling.textContent = '长度需大于6';
            } else if (this.value.length < 4) {
              this.parentNode.nextElementSibling.textContent = '长度需大于4';
            } else {
              this.parentNode.nextElementSibling.textContent = '长度需小于20';
            }
            this.parentNode.nextElementSibling.style.color = 'red';
          }
        }
      }


/*
const form = document.createElement('form');
for (let i = 0; i < 6; i++) {
  const input = document.createElement('input');
  input.type = 'text';
  input.style.width = '250px';
  input.style.height = '30px';
  input.style.margin = '0 auto';
  form.appendChild(input);
}
document.body.appendChild(form);
*/


// 04. 二、2.
/*
function getTimer() {

  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let list = [year, month, day, hour, minute, second];

  for (let i = 0; i < list.length; i++) {
      list[i] = list[i] < 10 ? '0' + list[i] : list[i];
  }

  return list[0] + '年' + list[1] + '月' + list[2] + '日 ' + list[3] + ':' + list[4] + ':' + list[5];
}

let timerId;

function setTimer() {
  timerId = setInterval(function () {
    let result = getTimer();
    const time = document.getElementById('time');
    time.value = result;
  }, 1000);
}

function clearTimer() {
  clearInterval(timerId);
}

setTimer();
*/

//04. 二、1.
/*
const btn = document.getElementById('btn');
btn.onclick = function () {
  let temp = prompt();
  setInterval(function () {
    console.log(temp)
  }, 1000);
}
*/


// 03 =_=
/*
function MyFile(file) {
  this.file = file;
  this.fill = function (n) {
    for (let i = n + 1; i <= n + 100; i++) {
      this.file.push(i);
    }
  }
  this.createPictures = function (files) {
    for (let i = 0, j = 0; i < 10; i++, j += 100) {
      this.fill(j);
      files.push(this.file);
    }
  }
}
let mf = new MyFile([]);
mf.createPictures([]);
console.log(mf.file);
*/

// 03 3
/*
let arr = [
  '文件夹1', '文件夹2', '文件夹3', '文件夹4', '文件夹5',
  '文件夹6', '文件夹7', '文件夹8', '文件夹9', '文件夹10',
];
let num = parseInt(Math.random() * 1000 + 1);
console.log(num);
for (let i = 0, j = -100, k = 0; i < 10; i++, j += 100, k += 100) {
  if (num > j + 100 && num <= k + 100) {
    console.log('该数字对应的图片应存放在 ' + arr[i] + ' 内');
  }
}
*/

// 03 2
/*
let list = [
  { student_id: 1, student_name: '张三', student_age: 18, student_hobby: ['唱歌', '打篮球', '画画'] },
  { student_id: 2, student_name: '李四', student_age: 19, student_hobby: ['游泳', '羽毛球', '写字'] },
  { student_id: 3, student_name: '王五', student_age: 20, student_hobby: ['唱歌', '读书', '乒乓球'] },
];
let heads = ['学号', '姓名', '年龄', '爱好', '操作'];
document.write('<table border="1" width="500" height="150" cellspacing="0">');
document.write('<tr>');
heads.forEach(function (head) {
  document.write('<th>' + head + '</th>');
});
document.write('</tr>');
list.forEach(function (obj) {
  document.write('<tr>');
  for (let key in obj) {
    document.write('<td align="center">');
    document.write(obj[key]);
    document.write('</td>');
  }
  document.write('<td align="center">');
  document.write('<a href="#">' + '删除' + '</a>');
  document.write('</td>');
  document.write('</tr>');
});
document.write('</table>');
*/

/*
var arr = ['张三', 28.7, 5, 'Join', 0.54, 'Lily', '李四', 993];
var arr1 = new Array(); //数字
var arr2 = new Array(); //字符

for (var i = 0; i < arr.length; i++) {
  var a = typeof arr[i];
  if (a == 'number') {
    arr1 = arr1.concat(arr[i]);
  } else {
    arr2 = arr2.concat(arr[i]);
  }
}
console.log(arr1);
console.log(arr2);
*/

// 03 1.
/*
let arr = ['张三', 28.7, 5, 'Join', 0.54, 'Lily', '李四', 993];
let nums = [];
let strs = [];
arr.forEach(function (value) {
  if (typeof value === typeof 0) {
    nums.push(value);
  } else if (typeof value === typeof '') {
    strs.push(value);
  }
});
console.log(nums);
console.log(strs);
*/

/*
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
*/

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
