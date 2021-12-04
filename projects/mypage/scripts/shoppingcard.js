// 加入购物车
function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj, null)[attr];
    }
}

function animate(obj, json, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        for (const attr in json) {
            let now = 0;
            if (attr == 'opacity') {
                now = parseInt(getStyle(obj, attr) * 100);
            } else {
                now = parseInt(getStyle(obj, attr));
            }
            let speed = (json[attr] - now) / 8;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            let cur = now + speed;
            if (attr == 'opacity') {
                obj.style[attr] = cur / 100;
                obj.style['filter'] = 'alpha(opacity=' + cur + ')';
            } else {
                obj.style[attr] = cur + 'px';
            }
            if (json[attr] == cur) {
                delete json[attr];
            }
        }
        if (JSON.stringify(json) == '{}') {
            clearInterval(obj.timer);
            callback && callback();
        }
    }, 30)
}

const btns = document.getElementsByClassName('btn');
const car = document.getElementById('car');

for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = function () {
        const oldImg = this.parentNode.firstElementChild.firstElementChild;
        const imgNode = document.createElement('img');
        imgNode.src = oldImg.src;
        imgNode.style.position = 'absolute';
        imgNode.style.left =  oldImg.offsetLeft + 'px';
        imgNode.style.top = oldImg.offsetTop  + 'px';
        imgNode.style.width = oldImg.offsetWidth  + 'px';
        imgNode.style.height = oldImg.offsetHeight + 'px';
        document.body.appendChild(imgNode);
        animate(imgNode, {
            left: car.offsetLeft,
            top: car.offsetTop + document.documentElement.scrollTop,
            width: 20,
            height: 20,
            opacity: 10
        }, function () {
            document.body.removeChild(imgNode);
            car.firstElementChild.innerHTML = parseInt(car.firstElementChild.innerHTML) + 1;
        })
    }
}
