import { getData } from "../services/getData.js";
import { state } from "../environment/environment.js";

let cards = document.querySelector('.cards');
let cardsAll = document.querySelector('.cards__all');
let cardsTrue = document.querySelector('.cards__true');
let cardsFalse = document.querySelector('.cards__false');

function renderTasks () {
    cardsFalse.innerHTML = '';
    cardsTrue.innerHTML = '';
    cardsAll.innerHTML = '';

    let mapData = [];

    getData(state.url + '.json').then((tasks) => {
        document.querySelector('.preloader__wrapper').classList.add('hidden');
        mapData = Object.keys(tasks).map(key => {
            return {
                id: key,
                ...tasks[key]
            }
        });

        renderAllTasks(mapData);
        mapData.forEach(card => {
            card.Status ? renderCompletedTasks(card) :  renderInProgressTasks(card);
        });
    });
};

function renderCompletedTasks(card) {
        cardsTrue.innerHTML += `
        <div class="card">
            <div class="card__content">
                <div class="card__group-one">
                    <button><img class="card__checkbox" src="./source/img/done.svg" alt=""></button>
                    <div>
                        <div class="card__title">${card.Title}</div>
                        <div class="card__desc">${card.Desc}</div>
                    </div>
                </div>
                
                <div class="card__group-two">
                    <div>
                        <div class="card__info">${card.Info}</div>
                        <div class="card__date">${card.Date}</div> 
                    </div>
                    <div class="dropdown">
                        <button><img src="./source/img/more.svg" class="card__more" data-menu=menu_${card.id}_completed alt=""></button>
                        <div class="dropdown__content hidden" id=menu_${card.id}_completed>
                            <button class="card__edit" id=${card.id}><img src="./source/img/edit.svg" alt="">Редактировать</button>
                            <button class="card__delete" id=${card.id}><img src="./source/img/delete.svg" alt="">Удалить</button>
                        </div>
                    </div> 
                </div>      
            </div>
        </div>
        `;
}

function renderInProgressTasks(card) {
    cardsFalse.innerHTML += `
        <div class="card">
            <div class="card__content">
                <div class="card__group-one">
                    <button><img class="card__checkbox card__checkbox-inProgress" id=${card.id} src="./source/img/inProgress.svg" alt=""></button>
                    <div>
                        <div class="card__title">${card.Title}</div>
                        <div class="card__desc">${card.Desc}</div>
                    </div>
                </div>
                
                <div class="card__group-two">
                    <div>
                        <div class="card__info">${card.Info}</div>
                        <div class="card__date">${card.Date}</div> 
                    </div>
                    <div class="dropdown">
                        <button><img src="./source/img/more.svg" class="card__more" data-menu=menu_${card.id}_nocompleted alt=""></button>
                        <div class="dropdown__content hidden" id=menu_${card.id}_nocompleted>
                            <button class="card__edit" id=${card.id}><img src="./source/img/edit.svg" alt="">Редактировать</button>
                            <button class="card__delete" id=${card.id}><img src="./source/img/delete.svg" alt="">Удалить</button>
                        </div>
                    </div> 
                </div>      
            </div>
        </div>
        `;
}

function renderAllTasks (tasks) {
    tasks?.sort((a, b) => a.Title > b.Title ? 1 : -1);
    tasks?.forEach(card => {
        cardsAll.innerHTML += `
       <div class="card">
            <div class="card__content">
                <div class="card__group-one">
                    <button>
                    <img 
                        id="${card.id}"
                        class="card__checkbox ${card.Status ? "" : "card__checkbox-inProgress"}" 
                        src="./source/img/${card.Status ? "done.svg" : "inProgress.svg"}" 
                        alt="">
                    </button>
                    <div>
                        <div class="card__title">${card.Title}</div>
                        <div class="card__desc">${card.Desc}</div>
                    </div>
                </div>
                
                <div class="card__group-two">
                    <div>
                        <div class="card__info">${card.Info}</div>
                        <div class="card__date">${card.Date}</div> 
                    </div>
                    <div class="dropdown">
                        <button><img src="./source/img/more.svg" class="card__more" data-menu=menu_${card.id}_all alt=""></button>
                        <div class="dropdown__content hidden" id=menu_${card.id}_all>
                            <button class="card__edit" id=${card.id}><img src="./source/img/edit.svg" alt="">Редактировать</button>
                            <button class="card__delete" id=${card.id}><img src="./source/img/delete.svg" alt="">Удалить</button>
                        </div>
                    </div> 
                </div>      
            </div>
        </div>
        `;
    });
}

export {
    renderTasks
};


