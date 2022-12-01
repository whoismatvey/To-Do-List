const cards = document.querySelector('.cards');
let activeNode = null;

function menuHidden () {
    let menuEdit = document.querySelectorAll('.dropdown__content');
    Array.from(menuEdit).forEach((item) => {
        item.classList.add('hidden')
    })
}

cards.addEventListener('click', (e) => {
    if (e.target === activeNode) {
        document.querySelector(`#${activeNode.getAttribute('data-menu')}`).classList.toggle('hidden');
        return;
    }
    if(e.target.classList.contains('card__more')) {
        activeNode = e.target;
        menuHidden();
        let c = e.target.getAttribute('data-menu');
        document.querySelector(`#${c}`).classList.toggle('hidden');
    }
})
