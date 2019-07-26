let table = document.getElementById('table');
let bttAdd = document.getElementById('bttAdd');
let rowNum = document.getElementById('rowNum');
let colNum = document.getElementById('colNum');
let content = document.getElementById('content');

bttAdd.addEventListener('click',()=>{
    let rowInput = rowNum.value;
    let colInput = colNum.value;
    let contentInput = content.value;
    table.rows[rowInput-1].cells[colInput -1].innerText = contentInput; 
})
console.dir(table);
