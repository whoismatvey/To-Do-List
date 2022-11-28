import { postData } from "../services/postData.js";
import { state } from "../environment/environment.js";
import { renderTasks } from "../components/renderTasks.js";
import { checkTabActive } from "../components/tabListener.js";

const addTaskBtn = document.querySelector('.add-card__add');
const taskTitle = document.querySelector('.add-card__title');
const taskDesc = document.querySelector('.add-card__desc');
const taskSphere = document.querySelector('.add-card__sphere');
const taskDate = document.querySelector('.add-card__date');
const preloader = document.querySelector('.preloader__wrapper');

function createTask (event) {
    const newTask = {
        Title: taskTitle.value,
        Desc: taskDesc.value,
        Info: taskSphere.value,
        Date: taskDate.value,
        Status: false,
    }

    event.preventDefault();

    preloader.classList.remove('hidden');
    postData(state.url + '.json', JSON.stringify(newTask)).then((responce) => {
        renderTasks ();
        checkTabActive();
        preloader.classList.add('hidden');
    })
}

function clearInputValue () {
    document.querySelector('.add-card__title').value = '';
    document.querySelector('.add-card__desc').value = '';
    document.querySelector('.add-card__sphere').value = '';
    document.querySelector('.add-card__date').value = '';
}

addTaskBtn.addEventListener('click', (event) => {
    createTask (event);
    clearInputValue ();
});