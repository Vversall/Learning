const requestURL = 'https://queenlyrain.backendless.app/api/data/items'

async function getRequest() {
  let response = await fetch(requestURL)
  let content = await response.json()
  let catalogList = document.querySelector('.catalog')
  let key

  for (key in content) {
    catalogList.innerHTML += `
        <div class="catalog-item">
              <div class="catalog-img-container">
                <img
                  src="${content[key].imageUrl}"
                  class="catalog-item-img"
                />
                <img class="favorite_star_gold" src="./images/favoritesgold_star_favorite_6338.png" alt="">
                <img class="favorite_star_silver" src="./images/favoritesilver_star_favorite_6337.png" alt="">
              </div>
              <div class="characteristics">
                <span class="catalog-item-name">${content[key].name}</span>
                <span class="catalog-item-price">${content[key].price} ₴</span>
              </div>
              <div class="subscription-about-wrapper">
                        <a href="contacts.html">Завмовити</a>
                    </div>
            </div>
        `
  }
}

getRequest()
