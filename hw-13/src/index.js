import './styles.css';
import apiService from './apiService.js';
import searchAndCont from './search-and-cont.hbs';
import 'material-design-icons/iconfont/material-icons.css';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/src/styles/main.scss';

document.querySelector('.img').innerHTML = searchAndCont();
export let pixicont = document.querySelector('.gallery');

let formSearch = document.querySelector('#search-form');

formSearch.addEventListener('submit', cbl);

let opt = {
  rootMargin: '5px',
  threshold: 0.8,
};

function onEntr(enries, obs) {
  enries.forEach(en => {
    if (en.isIntersecting && apiService.perpage === apiService.perpageFlag) {
      obs.unobserve(pixicont.lastElementChild);
      apiService.generate();
    }
  });
}

export let obs = new IntersectionObserver(onEntr, opt);

function cbl(e) {
  e.preventDefault();
  apiService.resetPage();
  apiService.resetPerpage();

  let inputText = e.currentTarget.elements.query.value;
  apiService.serchQwery = inputText;

  e.currentTarget.elements.query.value = '';

  pixicont.innerHTML = '';
  apiService.generate();
}

pixicont.addEventListener('click', cbOpenModal);
function cbOpenModal(e) {
  const instance = basicLightbox.create(
    `
  <img src="${e.target.dataset.large}" width="800" height="600" alt="pic">
  `,
    { closable: true },
  );
  instance.show();
}
