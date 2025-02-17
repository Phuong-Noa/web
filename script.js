const listImage = document.querySelector('.list-image')
const imgs = document.getElementsByTagName('img')
const length = imgs.length
const btnLeft = document.querySelector(`.btn-left`)
const btnRight = document.querySelector(`.btn-right`)
let current = 0
let width = imgs[0].offsetWidth; // Lấy chiều rộng của ảnh

const handleChangeSlide = () => {
    if (current == length - 1) {
        // Quay lại ảnh đầu tiên
        listImage.style.transform = `translateX(0px)`
        current = 0; // Reset lại current khi quay lại ảnh đầu tiên
        document.querySelector(`.active`).classList.remove(`active`)
        document.querySelector(`.index-item-` + current).classList.add(`active`)
    } else {
        listImage.style.transform = `translateX(${width * -1 * (current + 1)}px)`
        current++; // Cập nhật current để chuyển ảnh
    }
}

let handldeEventChangeSlide = setInterval(handleChangeSlide, 4000);
btnRight.addEventListener(`click`, () => {
    clearInterval(handldeEventChangeSlide)
    handleChangeSlide()
    handldeEventChangeSlide = setInterval(handleChangeSlide, 4000);
})

btnLeft.addEventListener(`click`, () => {
    clearInterval(handldeEventChangeSlide)
    if (current == 0) {
        current = length - 1;
        listImage.style.transform = `translateX(${width * -1 * current}px)`
        // Reset lại current khi quay lại ảnh đầu tiên
    } else {
        current--;
        listImage.style.transform = `translateX(${width * -1 * (current)}px)`
        // Cập nhật current để chuyển ảnh
    }
    handldeEventChangeSlide = setInterval(handleChangeSlide, 4000);
})