async function patchData (url, data) {
    const result = await fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });

    return result.json();
}

export {
    patchData
}