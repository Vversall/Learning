function validateForm() {
  const x = document.forms['myForm']['fname'].value
  if (x == '') {
    alert('Name must be filled out')
    return false
  } else {
    event.preventDefault()
    alert('Ми вам перетелефонуємо')
    console.log(x)
  }
}
