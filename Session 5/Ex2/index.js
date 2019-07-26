let selectColor = document.getElementById('selectedColor');
let bttDelete = document.getElementById('bttDelete');

console.dir(selectColor);
bttDelete.addEventListener('click', ()=>{
    let color = selectColor.options[selectColor.selectedIndex];
    color.remove();
})