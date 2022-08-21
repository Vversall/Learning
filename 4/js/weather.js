async function getWeather(city) {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city},ua&appid=45fdaeddca0c99a0639d3f0d55790255`
  )
  const data = await response.json()
  console.log(data)
  return data
}

getWeather('Zhytomyr')
getWeather('Rivne')
