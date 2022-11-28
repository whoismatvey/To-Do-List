import { showNotificationComp } from "../components/notificationTasks.js";
import { showNotificationError } from "../components/notificationTasks.js";

async function postData (url, data) {
    const result = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });

    if(!result.ok) {
        showNotificationError ();
    } else {
        showNotificationComp ();
    }

    return result.json();
}

export {
    postData
}