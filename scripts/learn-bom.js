/*
console.log(navigator.appName);
console.log(navigator.platform);
console.log(navigator.userAgent);
let userAgent = navigator.userAgent;
if (userAgent.indexOf('Chrome') > 0) {
  alert('Chrome 浏览器');
} else {
  alert('其他浏览器');
}
*/

/*
let btn = document.getElementById('btn');
btn.onclick = function () {
  location.hash = '#footer';
}
*/

// history.html

/**
 * 在 timer 中显示倒计时 10 秒钟
 * 时间到时，跳转到新的页面
 */
/*
let timer = document.getElementById('timer');
let count = 10;
let intervalId = setInterval(function () {
  count--;
  timer.innerHTML = count + '秒后跳转到新的页面...';
  if (count == 0) {
    clearInterval(intervalId);
    // location.href = 'https://google.com';
    location.href = './history.html?username=zhangsan&age=20'
  }
}, 1000)
*/

/**
 * js实现的页面跳转过程
 */
/*
let btn = document.getElementById('btn');
btn.onclick = function () {
  window.location.href = 'https://google.com';
}
*/

/**
 * window.history
 * 可以省略前面的 window
 */
/*
let back = document.getElementById('back');
let forward = document.getElementById('forward');
let go = document.getElementById('go');
back.onclick = function () {
  history.back();
};
forward.onclick = function () {
  history.forward();
};
*/
/**
 * 页面访问历史
 * go(负值) 页面回退
 * go(正值) 页面前进
 * go(0) 页面刷新
 */
/*
go.onclick = function () {
  history.go(0);
};
*/

/*
let btn = document.getElementById('btn');
let btn1 = document.getElementById('btn1');
let newWindow;
btn.onclick = function () {
  newWindow = window.open('https://google.com', 'test', 'width=400px, height=400px');
}
btn1.onclick = function () {
  newWindow.close();
}
*/

/*
let con = document.getElementById('con');
let pg = document.getElementById('pg');
let start = document.getElementById('start');
let pause = document.getElementById('pause');
let intervalId;
start.onclick = function () {
  intervalId = setInterval(function () {
    let width = pg.style.width;
    width = parseInt(width) + 1;
    pg.style.width = width + 'px';
    if (width == 500) {
      clearInterval(intervalId);
    }
  }, 50)
}
pause.onclick = function () {
  clearInterval(intervalId);
}
*/

/*
let index = 1;
setInterval(function () {
  document.write('当前值为' + index + '<br />');
  index = index + 1;
}, 1000);
*/

/*
document.write('3秒钟后会跳转到成人网站');
setTimeout(function () {
  window.location = 'http://www.3333ec.com';
}, 3000);
*/

/*
let btn = document.getElementById('btn');
// 可以延迟执行一段代码
let timeId = setTimeout(function () {
  alert('3秒时间到！');
}, 3000);
// console.log(timeId);
// clearTimeout(id);
// 清除特定 id 的延迟执行
btn.onclick = function () {
  clearTimeout(timeId);
};
*/

// 接受的用户输入会作为 prompt 的返回值
// 如果用户取消，返回值为 null
/*
let p1 = window.prompt('请输入用户姓名：', '文本框默认值');
console.log(p1);
*/

/*
let result = window.confirm('确认删除该条数据吗？');
if (result) {
  alert('用户确认了操作');
} else {
  alert('用户取消了操作');
}
*/
