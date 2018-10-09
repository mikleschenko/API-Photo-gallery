// let value = document.querySelector('.input').value;
function showGallery() {
    let value = document.querySelector('.input').value;
    fetch(`https://pixabay.com/api/videos/?key=5018958-ed49ccd90878e6614abdf24a6&q=${value}&per_page=9&video_type=film`)
        .then(function (cars) {
            return cars.json();
            // console.log(cars.json());
        }).then(function (result) {
        console.log(result);
        create(result.hits);
    })
}
document.querySelector('.btn').addEventListener('click', showGallery);

function create(array){
    let gallery = array.reduce(function (acc, elem) {
        return acc + `<div class="six">
        <p>${elem.tags}</p>
        <video src=${elem.videos.small.url}, autoplay="autoplay" />
    </div>`
    }, "")

    document.querySelector('#container').innerHTML = gallery;
}

window.addEventListener('DOMContentLoaded', showGallery); // подгружает свои картинки при обновл. стр.
window.addEventListener('keypress', function (event) { //навесить слушателя на кн. Ентер
    if(event.keyCode === 13){
        showGallery()
    }
    else {
        return
    }
})
