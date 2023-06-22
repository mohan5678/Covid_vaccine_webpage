const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register');
const btnPopup = document.querySelectorAll('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', () => {
  wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
  wrapper.classList.remove('active');
});

btnPopup.forEach((button) => {
  button.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
  });
});

document.addEventListener('click', (event) => {
  if (!wrapper.contains(event.target) && !btnPopup[0].contains(event.target)) {
    wrapper.classList.remove('active-popup');
  }
});

iconClose.addEventListener('click', () => {
  wrapper.classList.remove('active-popup');
});
