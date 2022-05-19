import i18Obj from '../translate.js';

window.addEventListener('DOMContentLoaded', function() {
  let theme = 'dark';

  const hamburger = document.querySelector('.hamburger-nav');
  const nav = document.querySelector('.nav-adaptive');
  const blackout = document.querySelector('.blackout-box');

  function toggleMenu() {
    hamburger.classList.toggle('open');
    nav.classList.toggle('open-nav');
    blackout.classList.toggle('blackout');

    if(theme === 'light' && hamburger.classList.contains('open')){
      document.documentElement.style.setProperty('--color-btn-close', '#000000'); 
    } else {
      document.documentElement.style.setProperty('--color-btn-close', '#ffffff'); 
    }
  }
  hamburger.addEventListener('click', toggleMenu);

  
  const navLink =document.querySelectorAll('.nav-link');
  navLink.forEach(link => link.addEventListener('click', toggleMenu));


  function preloadImages(timeOfYear) {
    const portfolioImages = document.querySelectorAll('.portfolio-image');
    portfolioImages.forEach((img, index) => img.src = `./assets/img/portfolio/${timeOfYear}/${index + 1}.jpg`);
  }
  preloadImages('autumn');





  const portfolioBtns = document.querySelector('.portfolio-btns');

  portfolioBtns.addEventListener('click', (event) => {
    const portfolioBtn = document.querySelectorAll('.portfolio-btn');
    portfolioBtn.forEach(elem => {
      if (elem.classList.contains('active-btn')) {
        elem.classList.remove('active-btn');
      }
    });
    event.target.classList.add('active-btn');
    preloadImages(event.target.dataset.season);
  }); 




  document.querySelector('.lang').addEventListener('click', (event) => {
    if (event.target.textContent === 'ru' || event.target.textContent === 'en') {

      document.querySelectorAll('.lang-link').forEach(elem => {
        if (elem.classList.contains('active-lang')) {
          elem.classList.remove('active-lang');
        }
      });
      event.target.classList.add('active-lang');

      document.querySelectorAll('[data-i18]').forEach(elem => {
        const dataElement = elem.dataset.i18;
        if (event.target.textContent === 'ru') {
          elem.textContent = i18Obj.ru[dataElement];
          if (elem.placeholder) {
            switch (dataElement) {
              case 'email':
                elem.placeholder = 'Электронная почта';
                break;
              case 'phone':
                elem.placeholder = 'Номер телефона';
                break;
              case 'message':
                elem.placeholder = 'Сообщение';
                break;
              default:
                break;
            }
          } 
        } else if(event.target.textContent === 'en') {
          elem.textContent = i18Obj.en[dataElement];
          if (elem.placeholder) {
            switch (dataElement) {
              case 'email':
                elem.placeholder = 'E-mail';
                break;
              case 'phone':
                elem.placeholder = 'Phone';
                break;
              case 'message':
                elem.placeholder = 'Message';
                break;
              default:
                break;
            }
          }
        }
      });
    }
  });



  document.querySelector('.theme').addEventListener('click', (event) => {
    document.querySelectorAll('.theme-img').forEach(elem => elem.classList.toggle('inactive-theme'));

    const listClassesChangeTheme = ['.wrapper', '.skills-items', '.price-items', '.nav-adaptive'];
    listClassesChangeTheme.forEach(elem => document.querySelector(elem).classList.toggle('light-theme'));

    document.querySelectorAll('.section-title').forEach(elem => elem.classList.toggle('light-theme'));
    document.querySelectorAll('.portfolio-btn').forEach(elem => elem.classList.toggle('light-theme'));
    if (event.target.dataset.theme === 'light') {
      document.documentElement.style.setProperty('--color-line', '#000000'); 
      document.documentElement.style.setProperty('--color-nav-adaptive', '#ffffff'); 
      document.documentElement.style.setProperty('--color-text-nav-adaptive', '#000000'); 
      theme = 'light';
    } else {
      document.documentElement.style.setProperty('--color-line', '#bdae82'); 
      document.documentElement.style.setProperty('--color-nav-adaptive', '#000000'); 
      document.documentElement.style.setProperty('--color-text-nav-adaptive', '#ffffff'); 
      theme = 'dark';
    }
  });


  
  const btns = document.querySelectorAll(".btn");
  btns.forEach(btn => btn.addEventListener('click', () => location.href='#contacts'));
  


  const btnContacts = document.querySelector(".contacts-btn");

  btnContacts.addEventListener('click', (event) => {
    event.preventDefault();

    if (!document.querySelector('.message')) {
      const contactsBox = document.querySelector(".contact-box");
      const message = document.createElement('div');
      message.textContent = 'Ваша запрос отправлен! Спасибо!';
      message.className = 'message';
      contactsBox.append(message);
    }
  })

  
});