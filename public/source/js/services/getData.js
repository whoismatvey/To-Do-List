async function getData (url) {
    const result = await fetch(url);
    if(!result.ok) {
        throw new Error(`Error status:" ${result.status} from ${result.url}`);
    }
    return result.json();
}

export {
    getData
}
