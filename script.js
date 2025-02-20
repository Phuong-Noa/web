const slider = document.querySelector('.manga-list');
const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');

let isDown = false;
let startX;
let scrollLeft;

// Bắt đầu kéo
slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // Điều chỉnh tốc độ kéo
    slider.scrollLeft = scrollLeft - walk;
});

// Thêm quán tính
let isScrolling;
slider.addEventListener('scroll', () => {
    window.clearTimeout(isScrolling);
    isScrolling = setTimeout(() => {
        let closest = Math.round(slider.scrollLeft / 210) * 210; // Snapping vào từng manga
        slider.scrollTo({ left: closest, behavior: 'smooth' });
    }, 100);
});

// Nút bấm trượt
btnLeft.addEventListener('click', () => {
    slider.scrollBy({ left: -210, behavior: 'smooth' });
});

btnRight.addEventListener('click', () => {
    slider.scrollBy({ left: 210, behavior: 'smooth' });
});
document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener("click", function () {
            this.querySelector(".dropdown-menu").classList.toggle("active");
        });
    });
});
