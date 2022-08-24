function burgerMenu(selector) {
  const menu = document.querySelector(selector)
  const button = menu.querySelector('.burger-menu__button')
  const links = menu.querySelector('.burger-menu__link')
  const overlay = menu.querySelector('.burger-menu__overlay')

  button.addEventListener('click', (e) => {
    e.preventDefault()
    toggleMenu()
  })

  links.addEventListener('click', () => toggleMenu())
  overlay.addEventListener('click', () => toggleMenu())

  function toggleMenu() {
    menu.classList.toggle('burger-menu_active')
  }
}

burgerMenu('.burger-menu')
