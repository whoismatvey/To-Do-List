const notificationComp = document.querySelector('.notification-comp');
const notificationError = document.querySelector('.notification-error');
const notificationEdit = document.querySelector('.notification-edit');
const notificationDelete = document.querySelector('.notification-delete');
const notificationWrong = document.querySelector('.notification-wrong');
const notificationCompleted = document.querySelector('.notification-completed');

function showNotificationComp () {
    notificationComp.classList.remove('hidden')
    setTimeout(() => {
        notificationComp.classList.add('hidden')
    }, 2000)
}

function showNotificationError () {
    notificationError.classList.remove('hidden')
    setTimeout(() => {
        notificationError.classList.add('hidden')
    }, 2000)
}

function showNotificationEdit () {
    notificationEdit.classList.remove('hidden')
    setTimeout(() => {
        notificationEdit.classList.add('hidden')
    }, 2000)
}

function showNotificationDelete () {
    notificationDelete.classList.remove('hidden')
    setTimeout(() => {
        notificationDelete.classList.add('hidden')
    }, 2000)
}

function showNotificationWrong () {
    notificationWrong.classList.remove('hidden')
    setTimeout(() => {
        notificationWrong.classList.add('hidden')
    }, 2000)
}

function showNotificationCompleted () {
    notificationCompleted.classList.remove('hidden')
    setTimeout(() => {
        notificationCompleted.classList.add('hidden')
    }, 2000)
}

export {
    showNotificationComp,
    showNotificationError,
    showNotificationEdit,
    showNotificationDelete,
    showNotificationWrong,
    showNotificationCompleted
}