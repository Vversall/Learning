async function getResponse() {
    let response = await fetch('https://queenlyrain.backendless.app/api/data/tools')
    let content = await response.json()
    console.log(content)

    let list = document.querySelector('.product_honey-item-container')
    let key;

    for (key in content) {
        list.innerHTML += `
        <div class="product_honey-item">
        <div class="star"></div>
        <span class="product_honey-type">${content[key].name}</span>
        <div class="product_honey-about-wrapper">
            <img src="${content[key].imageUrl}" alt="honey-1.png">
            <span class="product_honey-price">${content[key].price} </span>
            <a href="med.html">Замовити</a>
        </div>
        </div>
        `
    content[key]
    }
}
getResponse()