import { showNotificationEdit } from "../components/notificationTasks.js";

async function putData (url, data) {
    const result = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });

    if(result.ok) {
        showNotificationEdit ();
    }

    return result.json();
}

export {
    putData
}