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
