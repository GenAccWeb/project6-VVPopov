// Наполняем массив //
let images = [
    "bird-wing-wildlife-beak-pdra.jpeg",
    "owl-birds-couple-love.jpeg",
    "owls-wood-standing-birds.jpeg",
    "wallpaper-owl-tree-green-leaves-predator-birds.jpeg",
    "wallpaper-owl-birds.jpeg",
    "branch-wildlife-bird-of-prey-owl.jpg"
];

let index = 0;
const carusel = document.getElementById("carusel");
const nextBtn = document.getElementById("nextBtn");

// Устанавливаем первое изображение //
carusel.src = images[index];

// Обработчик клика — переключение изображений по циклу //
nextBtn.addEventListener("click", () => {
    index = (index + 1) % images.length;
    carusel.src = images[index];
});