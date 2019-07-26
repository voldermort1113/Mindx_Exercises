let getHref = document.getElementById('getHref');
let bttGetLink = document.getElementById('bttGetLink');
let output = document.getElementById('outputId');
console.dir(getHref);
bttGetLink.addEventListener('click', () => {
    output.value = getHref.href;
})
