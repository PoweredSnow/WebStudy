// window.getComputedStyle(DOM 节点对象, ":hover")
// 获取网页元素最终起作用的样式封装的对象
// 得到结果为只读的对象
/* let con = document.getElementById('con');
let obj = getComputedStyle(con);
if (con.currentStyle) {
    console.log(con.currentStyle['backgroundColor']);
} else {
    console.log(getComputedStyle(con))
} */

/*
const list = document.getElementsByClassName('list');
list[0].onmouseover = function () {
    let classStr = this.className;
    let classArr = classStr.split(' ');
    if (classArr.indexOf('bg') >= 0) {
        return;
    } else {
        this.className = this.className + ' bg';
    }
}
list[0].onmouseout = function () {
    let classStr = this.getAttribute('class');
    let classArr = classStr.split(' ');
    let index = classArr.indexOf('bg');
    if (index >= 0) {
        classArr.splice(index, 1);
        let str = classArr.join(' ');
        this.setAttribute('class', str);
    } else {
        return;
    }
    // this.className = classStr.slice(0, 4);
    // this.className = 'list';
}
*/

/*
const con = document.getElementById('con');

con.onmouseover = function () {
    this.style.border = "2px solid blue";
}

con.onmouseout = function () {
    this.style.border = "2px solid red";
}

con.onmousedown = function () {
    this.style.backgroundColor = "pink";
}

con.onmouseup = function () {
    this.style.backgroundColor = "white";
}

con.onclick = function () {
    console.log(this.style.height, this.style.width);
}
*/
