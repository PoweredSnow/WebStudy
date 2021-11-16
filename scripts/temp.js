const btn = document.querySelector('button');
const txt = document.querySelector('p');

btn.addEventListener('click', updateBtn);

function updateBtn() {
    if (btn.textContent === 'Start machine') {
        btn.textContent = 'Stop machine';
        txt.textContent = 'The machine has started!';
    } else {
        btn.textContent = 'Start machine';
        txt.textContent = 'The machine is stopped.';
    }
}

/*
const button = document.querySelector('button');

button.onclick = function () {
    let name = prompt('What is your name?');
    alert('Hello ' + name + ', nice to see you!');
}
*/

/*
const para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
    let name = prompt('请输入一个新的名字：');
    para.textContent = '玩家1：' + name;
}
*/
