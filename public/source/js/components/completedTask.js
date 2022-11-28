import {state} from "../environment/environment.js";
import {patchData} from "../services/patchData.js";
import {renderTasks} from "./renderTasks.js";
import {showNotificationWrong, showNotificationCompleted} from "../components/notificationTasks.js";

const cards = document.querySelector('.cards');
const preloader = document.querySelector('.preloader__wrapper');

let cardId = null;


cards.addEventListener('click', (e) => {
    if(e.target.classList.contains('card__checkbox') && e.target.classList.contains('card__checkbox-inProgress')) {
        preloader.classList.remove('hidden');

        cardId = e.target.id

        const newTask = {
            Status: true
        }

        patchData(`${state.url}/${cardId}.json`, JSON.stringify(newTask)).then((responce) => {
            showNotificationCompleted()
            preloader.classList.add('hidden');
            renderTasks();
        })
    }

    if(e.target.classList.contains('card__checkbox') && !e.target.classList.contains('card__checkbox-inProgress')) {
        showNotificationWrong()
    }
})