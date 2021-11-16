/*
const list = document.getElementById('list');
const li1 = document.getElementById('li1');
const btn = document.getElementById('btn');
const btn1 = document.getElementById('btn1');
let index = 2;

btn.onclick = function () {
    let liNode = document.createElement('li');
    liNode.innerHTML = '<a href="#">列表项' + index + '</a>';
    // liNode.textContent = '列表项2';
    list.appendChild(liNode);
    index = index + 1;
}

btn1.onclick = function () {
    let liNode = document.createElement('li');
    liNode.innerHTML = '<a href="#">列表项0</a>';
    list.insertBefore(liNode, li1);
}
*/

/*
const con = document.getElementById('con');
const add = document.getElementById('add');
const insert = document.getElementById('insert');
const img1 = document.getElementById('img1');

add.onclick = function () {
    // 创建一个节点元素的 DOM 对象
    let el = document.createElement('img');
    // 设置 DOM 对象的属性
    el.src = 'images/fruit1.png'
    // 将新创建的节点 DOM 对象，添加到父节点中
    con.appendChild(el);
}
insert.onclick = function () {
    let el = document.createElement('img');
    el.src = 'images/fruit2.png';
    // 在 con 中添加新元素，新元素位置在 img1 之前
    con.insertBefore(el, img1);
}
*/

// 获取元素节点的 nodeName 是该元素标签名的大写
// 获取文本节点的 nodeName 是 #text
/*
const el1 = document.getElementById('el1');
const el2 = document.getElementById('el2');
const img1 = document.getElementById('img1');
console.log(el1.nodeName, el2.nodeName, img1.nodeName);
console.log(el1.firstChild.nodeName);
*/

/**
 * 1.将 html 层级结构，抽象成树型的结构
 * 2.使用 DOM 节点对象来完成对页面元素的访问和操作过程
 * 3.访问过程，得到 DOM 节点对象
 * 4.DOM 元素的属性
 *
 * node.innerHTML 获取或者设置 DOM 节点中的 html 代码
 * node.innerText 获取或者设置 DOM 节点中的文本内容
 *
 * node.getAttribute('属性名'); // 获取特定属性
 * node.setAttribute('属性名', '属性值'); 设置特定属性属性值
 * node.hasAttribute('属性名');
 * node.removeAttribute('属性名');
 */

/*
const myimg = document.getElementsByTagName('img')[0];
// 获取 DOM 元素的属性
console.log(myimg.getAttribute('src'));
// 点击图片时，修改图片的 src 属性值
// setAttribute('属性名字', '属性值');
myimg.onclick = function () {
    this.setAttribute('src', 'images/animal3.png');
    // 判断 DOM 元素是否存在该属性
    if (this.hasAttribute('alt')) {
        // 若存在，则将该属性删除
        this.removeAttribute('alt');
    }
*/

/**
 * innerText 是用来设置元素标签中的纯文本内容
 * innerText 获取元素标签中的纯文本内容
 */
/*
const con = document.getElementById('con');
con.innerText = '<span>文本内容</span>';
*/

/*
const con = document.getElementById('con');
const con1 = document.getElementsByClassName('con')[0];
// 获取容器中的 html 代码
// dom元素.innerHTML 既可以获取元素标签中的 html 代码
// 也可以设置元素标签中的 html 代码，设置的 html 代码可以直接
// 被浏览器解析，识别，呈现为具体的网页元素
console.log(con.innerHTML);
const btn = document.getElementById('btn');
btn.onclick = function () {
    con.innerHTML = '<img src="images/animal2.png" alt="" />'
}
*/

/**
 * JavaScript 在浏览器中控制页面元素（DOM）、控制浏览器（BOM）
 *
 * DOM 节点对象用来控制网页上的元素
 * 获取 DOM 节点对象的方式
 * (1) 直接获取
 * <1>document.getElementById(id属性值)
 * 获取页面中特定 id 值得网页元素的 DOM 节点对象
 * 直接得到的就是一个对象
 * <2>document,getElementsByTagName(标签名) // 集合
 * 获取页面中特定标签名的网页元素的 DOM 节点对象集合（类数组）
 * 需要遍历这个集合，取到其中的 DOM 节点对象，来完成 DOM 操作过程
 * 给 DOM 节点对象添加事件时，需要注意，在事件的回调函数中，使用 this
 * 指向当前出发事件的 DOM 节点对象
 * <3>documnet.getElementsByClassName(class属性值) // 集合
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
