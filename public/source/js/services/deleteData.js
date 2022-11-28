import { showNotificationDelete } from "../components/notificationTasks.js";

async function deleteData (url) {
    const result = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        },
    });

    if(result.ok) {
        showNotificationDelete ();
    }

    return result.json();
}

export {
    deleteData
}