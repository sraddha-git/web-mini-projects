

const imageContainerEl = document.querySelector(".image-container");
const btnEl = document.querySelector(".btn");
btnEl.addEventListener("click", () => {
     imagenumber = 5;
    addNewImages();
});
function addNewImages() {
    for (let index = 0; index < imagenumber; index++) {
        const newImgEl = document.createElement("img");
        newImgEl.src = ` https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;
        imageContainerEl.appendChild(newImgEl);
    }

};