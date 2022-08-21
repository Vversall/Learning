document.addEventListener('touchstart', handleTouchStart, false)
document.addEventListener('touchmove', handleTouchMove, false)

let xDown = null
let yDown = null

function handleTouchStart(evt) {
  xDown = evt.touches[0].clientX
  yDown = evt.touches[0].clientY
}

let curUrl = document.URL

function handleTouchMove(evt) {
  if (!xDown || !yDown) {
    return
  }

  let xUp = evt.touches[0].clientX
  let yUp = evt.touches[0].clientY

  let xDiff = xDown - xUp
  let yDiff = yDown - yUp
  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    if (xDiff > 0) {
      if (curUrl.includes('main.html')) {
        document.location.href = './med.html'
      }

      if (curUrl.includes('med.html')) {
        document.location.href = './pasika.html'
      }

      if (curUrl.includes('pasika.html')) {
        document.location.href = './contacts.html'
      }
    } else {
      if (curUrl.includes('contacts.html')) {
        document.location.href = './pasika.html'
      }

      if (curUrl.includes('pasika.html')) {
        document.location.href = './med.html'
      }

      if (curUrl.includes('med.html')) {
        document.location.href = './main.html'
      }
    }
  }

  xDown = null
  yDown = null
}
