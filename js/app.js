



//cart

var images = document.querySelectorAll(".images");
var btn = document.querySelectorAll(".btn");

console.log(btn);

btn[0].disabled = true;
var poe = 0;

btn[1].addEventListener("click", function () {
    if (poe < images.length - 2) {
        poe++;
        for (let img of images) {
            img.style.transform = `translateX(-${poe * 100}%)`;
        }
        btn[0].disabled = false;
        if (poe === images.length - 2) {
            btn[1].disabled = true;
        }
    }
});

btn[0].addEventListener("click", function () {
    if (poe > 0) {
        poe--;
        for (let img of images) {
            img.style.transform = `translateX(-${poe * 100}%)`;
        }
        btn[1].disabled = false;
        if (poe === 0) {
            btn[0].disabled = true;
        }
    }
});



const mainimg = document.querySelector(".main-img");



function swap(ele) {

    mainimg.style.backgroundImage = `url(${ele.src})`


}