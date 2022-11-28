import { deleteData } from "../services/deleteData.js";
import { state } from "../environment/environment.js";
import { renderTasks } from "../components/renderTasks.js";
import { checkTabActive } from "../components/tabListener.js";
import { showNotificationDelete } from "../components/notificationTasks.js";

const preloader = document.querySelector('.preloader__wrapper');
const cards = document.querySelector('.cards');

cards.addEventListener("click", (e) => {
    if(e.target.classList.contains('card__delete')) {
        preloader.classList.remove('hidden')
        deleteData (`${state.url}/${e.target.id}.json`).then((response) => {
            renderTasks();
            checkTabActive();
            showNotificationDelete();
            preloader.classList.remove('hidden');
        });
    }
})