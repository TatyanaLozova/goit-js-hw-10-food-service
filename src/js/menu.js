import { menuList } from './refs.js';
import menu from '../menu.json';
import menuTemplate from '../template/menu-list.hbs';

// Создание разметки для всего массива объектов меню с помощью шаблонизатора
const menuMarkup = menuTemplate(menu);

// Добавление результата функции шаблонизатора в DOM
menuList.insertAdjacentHTML('afterbegin', menuMarkup);
