let cardsAll = document.querySelector('.cards__all');
let cardsTrue = document.querySelector('.cards__true');
let cardsFalse = document.querySelector('.cards__false');

let btnAll = document.querySelector('.filter__all');
let btnTrue = document.querySelector('.filter__true');
let btnFalse = document.querySelector('.filter__false');

btnTrue.addEventListener('click', () => {
    btnAll.classList.remove('active');
    btnFalse.classList.remove('active');
    btnTrue.classList.add('active');

    showTrueCard();
});

btnFalse.addEventListener('click', () => {
    btnAll.classList.remove('active');
    btnFalse.classList.add('active');
    btnTrue.classList.remove('active');

    showFalseCard();
});

btnAll.addEventListener('click', () => {
    btnAll.classList.add('active');
    btnFalse.classList.remove('active');
    btnTrue.classList.remove('active');

    showAllCard()
});

function checkTabActive () {
    let activeNode = '';
    [btnAll, btnTrue, btnFalse].forEach((item) => {
        if(item.classList.contains('active')) {
            activeNode = item;
        }
    });

    switch (activeNode.textContent) {
        case 'Все':
            console.log('all')
            showAllCard();
            break;
        case 'Сделаные':
            console.log('comp')
            showTrueCard();
            break;
        case 'Не сделаные':
            console.log('faoil')
            showFalseCard();
            break;
    }
}

function showAllCard () {
    cardsAll.classList.remove('hidden');
    cardsTrue.classList.add('hidden');
    cardsFalse.classList.add('hidden');
}

function showTrueCard () {
    cardsFalse.classList.add('hidden');
    cardsAll.classList.add('hidden');
    cardsTrue.classList.remove('hidden');
}

function showFalseCard () {
    cardsFalse.classList.remove('hidden');
    cardsAll.classList.add('hidden');
    cardsTrue.classList.add('hidden');
}

export {
    checkTabActive
}