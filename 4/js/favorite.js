let selectedDiv;
if(localStorage.getItem('color')!==null) {
  const color = localStorage.getItem('color');
  document.getElementsByClassName('star')[1].style.background = color;
}

document.body.onclick = function(event) {
    
  let target = event.target; 

   if (target.classList != 'star') return; 

  highlight(target); 
};

function highlight(div) {
   
  if (selectedDiv) { 
    selectedDiv.classList.remove('star');
  }
  selectedDiv = div;
 
  selectedDiv.classList.add('star1'); 
  console.log('work') ;
  localStorage.setItem('color', 'goldenrod');

}
