const modall = document.getElementById('myModal');
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modall.style.display = "block";
}
span.onclick = function () {
  modall.style.display = "none";
}
window.onclick = function (event) {
  if (event.target == modall) {
    modall.style.display = "none";
  }
}