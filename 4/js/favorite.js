let selectedDiv;

document.body.onclick = function(event) {
    
  let target = event.target; 

   if (target.classList != 'star') return; 

  highlight(target); 
};

function highlight(div) {
   
  if (selectedDiv) { 
    selectedDiv.classList.remove('star');
  }
  selecteddiv = div;
 
  selecteddiv.classList.add('star1'); 
  console.log('work') ;
  localStorage.setItem('color', 'goldenrod');
//   if(localStorage.getItem('color')!==null) {
//     const color = localStorage.getItem('color');
//     document.getElementsByClassName('star')[0].style.background = color;
// }
}
