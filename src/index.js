'use strict';

/* Настройка полифилов*/

import "@babel/polyfill"; // Полифил babel
import 'nodelist-foreach-polyfill'; // Полифил forEach
import elementClosest from 'element-closest'; // Полифил closest
elementClosest(window);
import 'formdata-polyfill'; // Полифил formData
import 'es6-promise'; // Полифил Promise
import 'fetch-polyfill'; // Полифил Fetch

/* Модули */

import togglePopup from './modules/togglePopup'; // Модуль с модальными окнами
import sendForm from './modules/sendForm'; // Модуль с отправкой формы
import chooseReg from './modules/chooseReg'; // Модуль с запретом ввода символов
import calcAccordion from './modules/calcAccordion'; // Модуль с калькулятором аккордеоном
import accordion from './modules/accordion'; // Модуль с аккордеоном
import moreInfo from './modules/moreInfo'; // Открытие доп карточек



// Модальные окно
togglePopup('.popup-call', '.call-btn');
togglePopup('.popup-discount', '.calc-btn');
let sellBtn = document.querySelector('.sell');
sellBtn.addEventListener('click', () => {
  togglePopup('.popup-discount', '.sell');
});
togglePopup('.popup-check', '.check-btn');
togglePopup('.popup-consultation', '.director-btn');
togglePopup('.popup-discount', '.sentence-btn');

// Отправка форм
document.body.addEventListener('submit', (event) => {
  event.preventDefault();
  sendForm(event.target);
});

// Вопрос клиента
const question = document.getElementById('question__input');

question.addEventListener('input', () => {
  window.globalObj["user_question"] = question.value; // запись в объект
});

// Запрет ввода символов
chooseReg('input[type="tel"]', /[^0-9+]/g); // Для телефона
chooseReg('.distance', /[^0-9]/g); // Расстояние в аккордеоне 
chooseReg('input[name="user_name"]', /[^а-яА-ЯёЁ\ ]/g); // Для текстовых полей

const phoneUser = document.querySelectorAll('.phone-user');

phoneUser.forEach((item) => {
  item.setAttribute('maxlength', '12'); // Ограничение на кол-во ввода символов
});

// Аккордеоны
accordion('accordion'); // Аккордеон калькулятор
accordion('accordion-two'); // Аккордеон в footer

// Открытие карточек
moreInfo();

// Калькулятор аккордеон
calcAccordion();