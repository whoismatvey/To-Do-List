import { renderTasks } from "./components/renderTasks.js";

renderTasks();

const addBtn = document.querySelector('.add__btn');
const addCard = document.querySelector('.add-card');
const addCancel = document.querySelector('.add-card__cancel');

addBtn.addEventListener('click', () => {
    addCard.classList.toggle('hidden');
})

addCancel.addEventListener('click', () => {
    addCard.classList.add('hidden');
})