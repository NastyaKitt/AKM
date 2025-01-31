let plusBtn = document.getElementById('plus')
let minusBtn = document.getElementById('minus')
let catalog = document.getElementById('catalog')

plusBtn.addEventListener('click', function() {
    catalog.classList.toggle('nonactive')
    minus.classList.toggle('nonactive')
})

minusBtn.addEventListener('click', function() {
    catalog.classList.toggle('nonactive')
    minus.classList.toggle('nonactive')
})