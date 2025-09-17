const navbar = document.querySelector(".navbar");

const bottomContainer = document.querySelector(".bottom-container");

console.log(navbar.offsetHeight);

console.log(bottomContainer.offsetTop);

window.addEventListener("scroll", () => {
    if (window.scrollY > bottomContainer.offsetTop - navbar.offsetHeight - 50) {
        navbar.classList.add("active");
    } else {
        navbar.classList.remove("active");
    }
});

// const nextEl = document.querySelector(".next");

// const prevEl = document.querySelector(".prev");

// const imgsEl = document.querySelectorAll("img");

// const imageContainerEl = document.querySelector(".image-container");

// let currentImg = 1;

// let timeout;

// nextEl.addEventListener("click", () => {
//   currentImg++;
//   clearTimeout(timeout);
//   updateImg();
// });

// prevEl.addEventListener("click", () => {
//   currentImg--;
//   clearTimeout(timeout);
//   updateImg();
// });

// updateImg();

// function updateImg() {
//   if (currentImg > imgsEl.length) {
//     currentImg = 1;
//   } else if (currentImg < 1) {
//     currentImg = imgsEl.length;
//   }
//   imageContainerEl.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;
//   timeout = setTimeout(() => {
//     currentImg++;
//     updateImg();
//   }, 3000);
// }