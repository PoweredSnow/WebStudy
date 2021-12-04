// 数字时钟
setInterval(function () {
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    let date = [
        h < 10 ? 0 : Math.floor(h / 10), h % 10,
        m < 10 ? 0 : Math.floor(m / 10), m % 10,
        s < 10 ? 0 : Math.floor(s / 10), s % 10
    ]

    const imgs = document.getElementsByClassName('number');
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].src = '../pictures/' + date[i] + '.png';
    }
})
