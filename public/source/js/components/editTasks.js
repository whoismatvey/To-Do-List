import { getData } from "../services/getData.js";
import { state } from "../environment/environment.js";
import { putData } from "../services/putData.js";
import { renderTasks } from "../components/renderTasks.js";

const cards = document.querySelector('.cards');
const cardAdd = document.querySelector('.cards__add');

const inputTitle = document.querySelector('.edit-task__title');
const inputDesc = document.querySelector('.edit-task__desc');
const inputSphere = document.querySelector('.edit-task__sphere');
const inputDate = document.querySelector('.edit-task__date');
let inputStatus = null;

const editTask = document.querySelector('.edit-task');
const editTaskBtn = document.querySelector('.edit-task__btn');

const preloader = document.querySelector('.preloader__wrapper');

let cardId = null;

cards.addEventListener('click', (e) => {
    if(e.target.classList.contains('card__edit')) {
        cardId = e.target.id

        cardAdd.classList.add('hidden')
        editTask.classList.remove('hidden');

        getData(`${state.url}/${e.target.id}.json`).then((tasks) => {
            inputTitle.value = tasks.Title;
            inputDesc.value = tasks.Desc;
            inputSphere.value = tasks.Info;
            inputDate.value = tasks.Date;
            inputStatus = tasks.Status;
        });
    }
})

editTaskBtn.addEventListener('click', (e) => {
    if(e.target.classList.contains('edit-task__cancel')) {
        cardAdd.classList.remove('hidden')
        editTask.classList.add('hidden');
    }
    if(e.target.classList.contains('edit-task__add')) {
        const newTask = {
            Title: inputTitle.value,
            Desc: inputDesc.value,
            Info: inputSphere.value,
            Date: inputDate.value,
            Status: inputStatus
        }

        preloader.classList.remove('hidden')

        putData(`${state.url}/${cardId}.json`, JSON.stringify(newTask)).then((responce) => {
            renderTasks();
            preloader.classList.add('hidden');
        })

        cardAdd.classList.remove('hidden')
        editTask.classList.add('hidden');
    }
})
