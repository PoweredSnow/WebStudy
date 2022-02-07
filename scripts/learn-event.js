/* const box = document.getElementById('box');
box.onmousedown = function (e) {
    let x = e.offsetX;
    let y = e.offsetY;
    document.onmousemove = function (event) {
        let clientX = event.clientX;
        let clientY = event.clientY;
        box.style.left = (clientX - x) + 'px';
        box.style.top = (clientY - y) + 'px';
    }
}
box.onmouseup = function () {
    document.onmousemove = null;
} */

/* const bg = document.getElementById('bg');
const login = document.getElementById('login');
login.onclick = function (e) {
    // 阻止事件的冒泡过程，事件执行到此元素，不再向上冒泡
    e.stopPropagation();
    console.log('按钮被点击了');
}
bg.onclick = function () {
    console.log('bg被点击了');
}
document.body.onclick = function () {
    console.log('body被点击了');
} */

/* const links = document.getElementById('links');

links.onclick = function (e) {
    // 通过事件对象调用preventDefault()来阻止元素的默认操作
    e.preventDefault();
} */

/* const box = document.getElementById('box');

box.onmousedown = function (e) {
    console.log(e);
} */
