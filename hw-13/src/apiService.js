import { obs, pixicont } from './index.js';
import imgcard from './imgcard.hbs';

import { error, success } from '@pnotify/core';
import { myStack } from './pnotify';

export default {
  qwery: '',
  page: 1,
  perpage: 12,
  perpageFlag: 12,
  key: '16717692-bb141906bc5c82eed9886cf8d',
  orientation: 'horizontal',
  nextPage() {
    this.page += 1;
  },
  resetPage() {
    this.page = 1;
  },
  set serchQwery(inputText) {
    this.qwery = inputText;
  },
  perpageMore() {
    this.perpage += 1;
  },
  resetPerpage() {
    this.perpage = 12;
  },
  generate() {
    fetch(
      'https://pixabay.com/api/?key=' +
        this.key +
        '&q=' +
        this.qwery +
        '&per_page=' +
        this.perpage +
        '&page=' +
        this.page +
        '&orientation=' +
        this.orientation,
    )
      .then(respon => {
        return respon.json();
      })
      .then(data => {
        let scrollPoint = pixicont.lastElementChild;

        data.hits.forEach(hit => {
          pixicont.insertAdjacentHTML('beforeend', imgcard(hit));
        });
        this.perpageFlag = data.hits.length + 1;
        this.perpageMore();
        this.nextPage();

        success({
          text: 'Success!',
          stack: myStack,
        });

        return scrollPoint;
      })
      .then(scrollPoint => {
        setTimeout(cbObserve, 300); // без таймаута сразу инресектится pixicont.lastElementChild первых 12 картинок, пробывал повесить на событие window.onload - тоже не сработало
        function cbObserve() {
          obs.observe(pixicont.lastElementChild);
        }

        if (this.perpage > 14)
          // Из-за подгрузки изображений scrollTo работает не стабильно
          scrollTo({
            top: scrollPoint.offsetTop,
            behavior: 'smooth',
          });
      })
      .catch(er => {
        console.log(er),
          error({
            text: 'Ooops!',
            stack: myStack,
          });
      });
  },
};
