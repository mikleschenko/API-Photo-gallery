
let search = document.querySelector('.btn');

function  showGallery() {
    let value = document.querySelector('.input').value;
    fetch(`https://pixabay.com/api/?key=5018958-ed49ccd90878e6614abdf24a6&q=${value}&per_page=9&image_type=photo`)
        .then(function (cars) {
            return cars.json();
        }).then(function (cars) {
        console.log(cars.hits); //в cars попадает объект! а в нем массив под назв. hits. Именно массив (а не объект) нам нужно предавать в функцию create
        create(cars.hits);
    })
}

search.addEventListener('click', showGallery);

//в этой ф-ции мы описываем инструкцию - как обрабатывать инфу, кот. попадет в параметр,
// и по сути она ничего нам не возвращает, потому что в  array ничего не попадает
//function create рисует тэги и будет работать в ф-ции function  showGallery
function create(array) {
    let gallery = array.reduce(function (acc, elem) {
        return acc + `<div class="one">
    <p>${elem.tags}</p>
<img src=${elem.webformatURL}/>
    </div>`
    }, "")

    document.querySelector('#container').innerHTML = gallery;
}


window.addEventListener('DOMContentLoaded', showGallery);
window.addEventListener('keypress', function (event) {
    if (event.keyCode === 13){
        showGallery()
    }
    else {
        return;
    }
});

