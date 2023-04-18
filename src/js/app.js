//Подключение файлов js из папки 'modules'
//import * as flsFunctions from "./modules/functions.js";
//Імпорт функції додавання класу '_action'
//import * as click from "./modules/onclickAdd_action.js";
//import * as formValidate from "./modules/formValidate.js";
import * as slider from "./modules/slider.js";
slider.go();

//formValidate.isRequiredTrue();

//flsFunctions.isWebp();

// core version + navigation, pagination modules:
//!  import Swiper, { Navigation, Pagination } from 'swiper';
//! const swiper = new Swiper(...);

//Виклик функції додавання каласу в н6алащтуваннях передаємо ім'я класу по якому клік я до кого потрібно додати '_action'
//click.clickOnClassADDClassName('.burger-menu', '.header__main-menu');
//modal.modal();


//console.log(click.clickOnClass());

//console.log('action');



//document.addEventListener('click', sendForm);

//function sendForm(event) {
//   if (event.target.type == 'submit') {
//      event.preventDefault();

//      const form = event.target.form;

//      if (form) {
//         if (formValidate.isRequiredTrue(form)) {
//            const formSend = document.createElement('div');
//            formSend.classList.add('form-send');

//            const sendingFormAlert = document.createElement('p');
//            sendingFormAlert.classList.add('form-send__Alert');
//            sendingFormAlert.textContent = 'thank you, we have received your message';
//            formSend.append(sendingFormAlert);
//            const body = document.querySelector("body");
//            body.append(formSend);
//            body.style.overflow = 'hidden';
//         }
//         //formValidate.isRequiredTrue(form);
//      }
//   }
//}

//document.addEventListener('click', returnBody);

//function returnBody(event) {
//   if (event.target.closest('.form-send')) {
//      const body = document.querySelector("body")
//      body.style.overflow = 'scroll';
//      document.querySelector('.form-send').remove();
//   }
//}