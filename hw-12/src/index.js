import './styles.css';
import fetchCountries from './fetch-countries.js';
import countryTemplate from './country-template.hbs';
import { error, alert } from '@pnotify/core';
import { myStack } from './pnotify';
const debounce = require('lodash.debounce');

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
  let markup = arrayFromFetchCountries.reduce((ac, el, idx) => {
    return (ac += `<p style="margin: 0"><img src="${el.flag}" width="34px" alt="pic"> <a data-idx="${idx}" href="#">${el.name}</a> </p>`);
  }, '');
  resultSerchContainer.innerHTML = markup;
  resultSerchContainer.addEventListener('click', cba);

  function cba(e) {
    serchOneX(arrayFromFetchCountries[e.target.dataset.idx]);
  }
}

function serchOne(arrayFromFetchCountries) {
  resultSerchContainer.innerHTML = countryTemplate(...arrayFromFetchCountries);
}

function serchOneX(obj) {
  resultSerchContainer.innerHTML = countryTemplate(obj);
}
