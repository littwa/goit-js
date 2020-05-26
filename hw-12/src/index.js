import './styles.css';
import fetchCountries from './fetch-countries.js';
import countryTemplate from './country-template.hbs';
import { error, alert, defaults, Stack } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
const debounce = require('lodash.debounce');

defaults.width = '320px';
defaults.sticker = false;
defaults.maxTextHeight = 0;
const myStack = new Stack({
  dir1: 'left',
  dir2: 'down',
  firstpos1: 10,
  firstpos2: 25,
  spacing1: 100,
  spacing2: 10,
  push: 'bottom',
  context: document.querySelector('#formserch'),
});

let resultSerchContainer = document.querySelector('.result-serch-container');
let formSerch = document.querySelector('#formserch');
formSerch.addEventListener('input', debounce(cb, 500));

function cb(e) {
  if (e.target.value) {
    fetchCountries(e.target.value)
      .then(arrayFromFetchCountries => {
        if (
          arrayFromFetchCountries.length >= 2 &&
          arrayFromFetchCountries.length <= 10
        ) {
          serchOneToTen(arrayFromFetchCountries);
        } else if (arrayFromFetchCountries.length === 1) {
          serchOne(arrayFromFetchCountries);
        } else if (arrayFromFetchCountries.length > 10) {
          resultSerchContainer.innerHTML = '';
          error({
            text: 'Too many matches found. Please enter a more specific query!',
            stack: myStack,
          });
        } else {
          resultSerchContainer.innerHTML = '';
          alert({
            text: 'Please enter a more specific query!',
            stack: myStack,
          });
        }
      })
      .catch(error => {
        console.warn(error);
      });
  } else {
    resultSerchContainer.innerHTML = '';
  }
}

function serchOneToTen(arrayFromFetchCountries) {
  let markup = arrayFromFetchCountries.reduce((ac, el) => {
    return (ac += `<p style="margin: 0"><img src="${el.flag}" width="34px" alt="pic"> ${el.name}</p>`);
  }, '');
  resultSerchContainer.innerHTML = markup;
}

function serchOne(arrayFromFetchCountries) {
  resultSerchContainer.innerHTML = countryTemplate(...arrayFromFetchCountries);
}
