import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const createPictureList = () => {
  const list = galleryItems
    .map((el) => {
      const item = `<li class="gallery__item">
   <a class="gallery__link" href="${el.original}">
      <img class="gallery__image" src="${el.preview}" alt="${el.description}"</img></a>
</li>`;
      console.log(item);
      return item;
    })
    .join("");
  gallery.innerHTML = list;
};

createPictureList();
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: "250ms",
});
