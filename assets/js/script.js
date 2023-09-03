const menuButton = document.querySelector('.nav-bar-button');
const menuContent = document.querySelector('.menu-content');
const navBarList = document.querySelector('.nav-bar-list');

menuContent.addEventListener('click', (e) => {
  if(e.target.classList.contains('nav-bar-option')) {
    navBarList.classList.remove('active');
    menuButton.classList.remove('active');
  }
});

menuButton.addEventListener('click', (e) => {
  navBarList.classList.toggle('active');
  menuButton.classList.toggle('active');
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  }));
})
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
