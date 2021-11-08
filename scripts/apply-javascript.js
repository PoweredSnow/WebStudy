// 函数：创建一个新的段落并添加至 HTML body 底部。
function createParagraph() {
    let para = document.createElement('p');
    para.textContent = '你点击了这个按钮！';
    document.body.appendChild(para);
}

/*
  1. 取得页面上所有按钮的引用并将它们置于一个数组中。
  2. 通过一个循环为每个按钮添加一个点击事件的监听器。
  当按钮被点击时，调用 createParagraph() 函数。
*/

const buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', createParagraph);
}
