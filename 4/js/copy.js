const number = document.querySelectorAll('.number')

for (item of number) {
  item.addEventListener('click', (event) => {
    navigator.clipboard.writeText(event.target.innerHTML)
    alert(Скопійовано)
  })
}
