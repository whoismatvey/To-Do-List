const cards = document.querySelector('.cards');

function menuHidden () {
    let menuEdit = document.querySelectorAll('.dropdown__content');
    Array.from(menuEdit).forEach((item) => {
        item.classList.add('hidden')
    })
}

cards.addEventListener('click', (e) => {
    if(e.target.classList.contains('card__more')) {
        menuHidden();
        let c = e.target.getAttribute('data-menu');
        document.querySelector(`#${c}`).classList.toggle('hidden');
    }
})