import gal from "../gallery-items.js";

let galleryUlContainer = document.querySelector("ul.gallery.js-gallery");
let modalDiv = document.querySelector("div.lightbox.js-lightbox");
let closeModalButton = document.querySelector('[data-action="close-lightbox"]');

function renderHtml(gal) {
 let layout = gal.reduce((ac, el) => {
  ac += `<li class="gallery__item">
  <a
   class="gallery__link"
   href="${el.original}"
  >
   <img
    class="gallery__image"
    src="${el.preview}"
    data-source="${el.original}"
    alt="${el.description}"
   />
  </a>
 </li>`;
  return ac;
 }, "");

 return layout;
}

galleryUlContainer.insertAdjacentHTML("afterbegin", renderHtml(gal));

galleryUlContainer.addEventListener("click", cbOpenModal);

closeModalButton.addEventListener("click", closeModal);

document.querySelector(".lightbox__content").addEventListener("click", closeClickOnBackdrop);

let currentElement;
let lightboxImage = modalDiv.querySelector(".lightbox__image");

function cbOpenModal(event) {
 event.preventDefault();

 if (event.target === event.currentTarget) {
  return;
 }
 currentElement = event.target.parentElement.parentElement;

 let srcImgOriginal = event.target.getAttribute("data-source");
 modalDiv.classList.add("is-open");
 lightboxImage.setAttribute("src", srcImgOriginal);
 window.addEventListener("keydown", escKeyPress);
 window.addEventListener("keydown", nextKeyPress);
 window.addEventListener("keydown", prevKeyPress);
}

function prevKeyPress(event) {
 if (event.code === "ArrowLeft" && currentElement.previousElementSibling) {
  let atributHref = currentElement.previousElementSibling.firstElementChild.getAttribute("href");
  currentElement = currentElement.previousElementSibling;
  lightboxImage.setAttribute("src", atributHref);
 }
}

function nextKeyPress(event) {
 if (event.code === "ArrowRight" && currentElement.nextElementSibling) {
  let atributHref = currentElement.nextElementSibling.firstElementChild.getAttribute("href");
  currentElement = currentElement.nextElementSibling;
  lightboxImage.setAttribute("src", atributHref);
 }
}

function closeModal(event) {
 modalDiv.classList.remove("is-open");
 lightboxImage.setAttribute("src", "");
 window.removeEventListener("keydown", escKeyPress);
}

function escKeyPress(event) {
 if (event.code === "Escape") {
  closeModal();
 } else return;
}

function closeClickOnBackdrop(event) {
 if (event.target === event.currentTarget) {
  closeModal();
 } else return;
}
