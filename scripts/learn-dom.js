/**
 * JavaScript 在浏览器中控制页面元素（DOM）、控制浏览器（BOM）
 *
 * DOM 节点对象用来控制网页上的元素
 * 获取 DOM 节点对象的方式
 * (1) 直接获取
 * document.getElementById(id属性值)
 * 获取页面中特定 id 值得网页元素的 DOM 节点对象
 * 直接得到的就是一个对象
 * document,getElementsByTagName(标签名)
 * 获取页面中特定标签名的网页元素的 DOM 节点对象集合（类数组）
 * 需要遍历这个集合，取到其中的 DOM 节点对象，来完成 DOM 操作过程
 * 给 DOM 节点对象添加事件时，需要注意，在事件的回调函数中，使用 this
 * 指向当前出发事件的 DOM 节点对象
 * documnet.getElementsByClassName(class属性值)
 * 获取页面中特定的 class 属性值的网页元素的 DOM 节点对象集合（类数组）
 * 需要遍历这个集合，获取集合中的 DOM 节点对象，完成 DOM 操作过程
 * (2)通过节点关系获取的
 * 节点树（包含注释和空格） 元素树（不包含注释和空格）
 * 父节点.children 得到的是子节点的 DOM 对象集合
 * 父节点.firstElementChild 得到第一个元素节点的 DOM 对象
 * 父节点.lastElementChild 得到最后一个子元素节点的 DOM 对象
 * 子节点.parentNode 得到子节点的父节点 DOM 对象
 * 节点.previousElementSibling 前一个兄弟节点的 DOM 对象
 * 节点.nextElementSibling 后一个兄弟节点的 DOM 对象
 */

/* let item2 = document.getElementById('item2');
item2.onclick = function () {
    this.previousElementSibling.style.backgroundColor = 'red';
    this.nextElementSibling.style.backgroundColor = 'yellow';
} */

/* let con = document.getElementById('con');
let last = con.lastElementChild.lastElementChild;
console.log(last);
let img4 = document.getElementById('img4');
// img4.parentNode.style.backgroundColor = 'purple';
// img4.parentNode.parentNode.style.backgroundColor = 'orange';
img4.parentNode.parentNode.parentNode.style.backgroundColor = 'lightblue'; */

/**
 * 节点树属性 childNodes，得到集合包含有空格和注释，实用性较差
 * 元素树属性，children，得到集合包含元素节点，不包含空格和注释
 *
 * 适用于子元素数量不确定，然后 class 属性值不确定
 * 并且可能会有动态更新的情况
 */
/* let con = document.getElementById('con');
console.log(con.childNodes);
let itemList = con.children;
for (let i = 0; i < itemList.length; i++) {
    itemList[i].onmouseover = function () {
        this.style.backgroundColor = 'orange';
    }
    itemList[i].onmouseout = function () {
        this.style.backgroundColor = 'white';
    }
}
console.log(con.firstChild);
console.log(con.firstElementChild); */

/**
 * 根据元素的 class 属性来获取对应网页元素的 DOM 节点对象的集合
 */
/*
let con = document.getElementById('con');
let itemList = con.getElementsByClassName('item');
for (let i = 0; i < itemList.length; i++) {
    itemList[i].onclick = function () {
        this.style.backgroundColor = 'red';
    }
}
*/

/**
 * document.getElementsByTagName(标签名字)
 * 获取页面中特定标签名的网页元素的 DOM 节点对象
 */
/*
let con = document.getElementById('con');
let itemList = con.getElementsByTagName('div');
console.log(itemList);
for (let i = 0; i < itemList.length; i++) {
    itemList[i].onmouseover = function () {
        this.style.backgroundColor = 'blue';
    }
    itemList[i].onmouseout = function () {
        this.style.backgroundColor = 'white';
    }
}
*/

/**
 * document 是对整个网页文档的抽象
 * document.getElementById('con')
 * 表示在整个网页文档中，根据元素的 id 属性值获取
 * 到该元素的 DOM 节点对象
 */
// let con = document.getElementById('con');
// let img1 = document.getElementById('img1');
// img1.onclick = function () {
//     /**
//      * 在事件的回调函数中，this 指向当前触发事件的
//      * DOM 节点对象
//      */
//     this.style.border = '1px solid red';
// }
