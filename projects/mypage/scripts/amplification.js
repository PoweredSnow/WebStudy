// 放大镜
const box = document.getElementById('box');
const img1 = document.getElementById('img1');
const slider = document.getElementById('slider');
const img2 = document.getElementById('img2');
const Bimg = document.getElementById('Bimg');

img1.onmouseover = function () {
    slider.style.display = 'block';
    img2.style.display = 'block';
};

img1.onmouseout = function () {
    slider.style.display = 'none';
    img2.style.display = 'none';
};

img1.onmousemove = function (e) {
    let sliderLeft = e.clientX - box.offsetLeft - slider.offsetWidth / 2;
    let sliderTop = e.clientY - box.offsetTop - slider.offsetHeight / 2;

    let minLeft = 0;
    let maxLeft = img1.offsetWidth - slider.offsetWidth;
    sliderLeft = sliderLeft <= minLeft ? minLeft : sliderLeft;
    sliderLeft = sliderLeft >= maxLeft ? maxLeft : sliderLeft;

    let minTop = 0;
    let maxTop = img1.offsetHeight - slider.offsetHeight;
    sliderTop = sliderTop <= minTop ? minTop : sliderTop;
    sliderTop = sliderTop >= maxTop ? maxTop : sliderTop;

    slider.style.left = sliderLeft + 'px';
    slider.style.top = sliderTop + 'px';

    let persentX = sliderLeft / maxLeft;
    let persentY = sliderTop / maxTop;
    Bimg.style.left = -persentX * (Bimg.offsetWidth - img2.offsetWidth) + 'px';
    Bimg.style.top = -persentY * (Bimg.offsetWidth - img2.offsetWidth) + 'px';
};
