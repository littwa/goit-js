import './styles.css';
import menu from './menu.json';
import menuItem from './template.hbs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

let bodyTag = document.querySelector('body');
let themeSwitchInbox = document.querySelector('.js-switch-input');

if (localStorage.lastThemUser === Theme.DARK) {
  bodyTag.classList.add(localStorage.lastThemUser);
  themeSwitchInbox.checked = true;
} else {
  bodyTag.classList.add(Theme.LIGHT);
}

themeSwitchInbox.addEventListener('change', cb);
function cb(e) {
  if (bodyTag.classList.contains(Theme.LIGHT)) {
    bodyTag.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('lastThemUser', Theme.DARK);
  } else {
    {
      bodyTag.classList.replace(Theme.DARK, Theme.LIGHT);
      localStorage.setItem('lastThemUser', Theme.LIGHT);
    }
  }
}

//===========Template====

let contMenu = document.querySelector('.js-menu');

function buildMenu(menuItem) {
  const loyout = menu.map(el => menuItem(el)).join('');
  contMenu.insertAdjacentHTML('beforeend', loyout);
}

buildMenu(menuItem);
