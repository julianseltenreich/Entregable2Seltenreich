export function setInfoStorage( key = '', value = ''){
    localStorage.setItem(key, JSON.stringify(value));
};

export function getInfoStorage(key = ''){
    return JSON.parse(localStorage.getItem(key));
};

export function removeInfoStorage(key = ''){
    localStorage.removeItem(key);
};

export function clearInfoStorage(){
    localStorage.clear();
};


