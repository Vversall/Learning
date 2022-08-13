document.body.onclick = (event) => {
    const number = document.querySelector('.number')
    const copyImg = event.target;
    if (number.classList.contains('number')  || copyImg.classList.contains('kyievstar')) {
        navigator.clipboard.writeText(number.innerHTML)
        
    }
   
}

  
  fetch(
    "http://api.openweathermap.org/data/2.5/weather?q=Zhytomyr,ua&appid=45fdaeddca0c99a0639d3f0d55790255"
  )
    .then(function (resp) {
      return resp.json()
    })
    .then(function (data) {
      console.log(data);
    })