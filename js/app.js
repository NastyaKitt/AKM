let priceBtn = document.getElementById('pricebutt')
let price = document.getElementById('priceItem')

let priceBtn1 = document.getElementById('pricebutt1')
let price1 = document.getElementById('priceItem1')

let priceBtn2 = document.getElementById('pricebutt2')
let price2 = document.getElementById('priceItem2')




priceBtn.addEventListener('click', function() {
    price.classList.toggle('open');
    priceBtn.classList.toggle('rotate');
});


priceBtn1.addEventListener('click', function() {
    price1.classList.toggle('open');
    priceBtn1.classList.toggle('rotate');

});


priceBtn2.addEventListener('click', function() {
    price2.classList.toggle('open');
    priceBtn2.classList.toggle('rotate');

});



// -------------------------POPUP

const popupBtn = document.getElementById('popupBtn');
const popupBtn1 = document.getElementById('popupBtn1');
let popup = document.getElementById("popup");
let closed = document.getElementById('closeBtn');

function showPopup(){
    popup.classList.add('wopen')
}
popupBtn.addEventListener('click', showPopup);
popupBtn1.addEventListener('click', showPopup);


closed.addEventListener('click', function() {
    popup.classList.remove('wopen')
});

// --------------------Хэдер
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

// ------------------------------------ПОЛИТИКА
let politic = document.getElementById('politic');
let politicPopup = document.getElementById('politicPopup');
let closePolitic = document.getElementById('closePolitBtn');

function showPopup1(){
    politicPopup.classList.add('politicOpen')
}
politic.addEventListener('click', showPopup1);
politicBtn1.addEventListener('click', showPopup1);


closePolitic.addEventListener('click', function() {
    politicPopup.classList.remove('politicOpen')
});
