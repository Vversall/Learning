const modal = document.getElementById('myModal');
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
}
span.onclick = function () {
  modal.style.display = "none";
}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


document.querySelector('.themetoggle').addEventListener('click', (event) => {
  event.preventDefault();
  if (localStorage.getItem('theme') === 'dark') {
    localStorage.removeItem('theme');
  }
  else {
    localStorage.setItem('theme', 'dark')
  }
  addDarkClassToHTML()
});

function addDarkClassToHTML() {
  try {
    if (localStorage.getItem('theme') === 'dark') {
      document.querySelector('html').classList.add('dark');
      document.querySelector('.themetoggle span').textContent = 'dark_mode';
    }
    else {
      document.querySelector('html').classList.remove('dark');
      document.querySelector('.themetoggle span').textContent = 'wb_sunny';
    }
  } catch (err) { }
}

addDarkClassToHTML();


function burgerMenu(selector) {
  let menu = document.querySelector(selector);
  let button = menu.querySelector('.burger-menu__button');
  let links = menu.querySelector('.burger-menu__link');
  let overlay = menu.querySelector('.burger-menu__overlay');

  button.addEventListener('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });

  links.addEventListener('click', () => toggleMenu());
  overlay.addEventListener('click', () => toggleMenu());

  function toggleMenu() {
    menu.classList.toggle('burger-menu_active');
    if (menu.classList.contains('burger-menu_active')) {
      document.querySelector('body').css('overflow', 'hidden');
    } else {
      document.querySelector('body').css('overflow', 'visible');
    }
  }
}

burgerMenu('.burger-menu');


thumbs.onclick = function(event) {
  let thumbnail = event.target.closest('a');

  if (!thumbnail) return;
  showThumbnail(thumbnail.href, thumbnail.title);
  event.preventDefault();
}

function showThumbnail(href, title) {
  largeImg.src = href;
  largeImg.alt = title;
}


var slideIndex = 1;
showSlides(slideIndex);

// Вперед/назад элементы управления
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Элементы управления миниатюрами изображений
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
      alert("Name must be filled out");
      return false;
  }
}