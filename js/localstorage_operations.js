export function getLocalStorageObject(objectName) {
    return JSON.parse(localStorage.getItem(objectName));
}

export function setObjectToLocalStorage(objectName, object) {
    localStorage.setItem(objectName, JSON.stringify(object));
}

export function addArrayToLocalstorage(arrayName, entry) {
    let existingEntries = getLocalStorageObject(arrayName);

    if(existingEntries == null) {
        existingEntries = [];
    }

    existingEntries.push(entry);
    setObjectToLocalStorage(arrayName, existingEntries);
}