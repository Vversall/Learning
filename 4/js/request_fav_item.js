const baseUrl = 'https://queenlyrain.backendless.app/api/data'
const getIsFavourite = (key) =>
  JSON.parse(localStorage.getItem('key').includes(key))

const createCard = (item) => {
  const isFavourite = getIsFavourite(item.name)
  const isAvailable = item.availability

  return `<div class="catalog-item">
  <div class="catalog-img-container">
    <img
      src="${item.imageUrl}"
      class="catalog-item-img"/>
    <img class="favorite_star_gold ${
      isFavourite ? 'gold' : ''
    } " src="./images/favoritesred.png" alt="">
    <img class="favorite_star_silver" src="./images/favoritesgreen.png" alt="">
  </div>
  <div class="characteristics">
    <span class="catalog-item-name">${item.name}</span>
    <span class="catalog-item-price">${item.price} ₴</span>
  </div>
  <div class="subscription-about-wrapper">
            <a href="contacts.html">Завмовити</a>
        </div>
</div>`
}

try {
  fetch(`${baseUrl}/items`)
    .then((response) => response.json())

    .then((result) => {
      const gallery = document.querySelector('.catalog')

      const gallaryCards = result.map((item) => createCard(item))

      gallery.innerHTML = gallaryCards.join('\n')
    })
} catch (e) {
  console.log(`Error: ${e.code} --- ${e.message}`)
}
