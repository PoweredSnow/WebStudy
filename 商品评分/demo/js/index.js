const imgList = document.getElementsByTagName('img');
const txt = document.getElementById('txt');
const comments = ['差', '一般', '中等', '还行', '好'];

for (let i = 0; i < imgList.length; i++) {
    imgList[i].onmousemove = function () {
        console.log(i);
        let imgSrc = '';
        if (i < 2) {
            imgSrc = 'images/star1.png';
        } else {
            imgSrc = 'images/star2.png';
        }
        for (let j = 0; j < i + 1; j++) {
            imgList[j].src = imgSrc;
        }
        txt.value = comments[i];
    }

    imgList[i].onmouseout = function () {
        for (let n = 0; n < imgList.length; n++) {
            imgList[n].src = 'images/star0.png';
            txt.value = '';
        }
    }
}
