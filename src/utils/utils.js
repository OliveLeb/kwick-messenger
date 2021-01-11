export const formatDate = (timestamp) => {

    // const frenchDays = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    const frenchMonth = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

    const date = new Date(timestamp * 1000);
    const day = date.getDate();
    const month = frenchMonth[date.getMonth()];
    const year = date.getFullYear();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const seconds = date.getSeconds();

    function addFirstDigit(time) {
        if(time < 10) return `0${time}`;
        return time;
    }

    return `le ${day} ${month} ${year} à ${addFirstDigit(hour)}:${addFirstDigit(minute)}:${addFirstDigit(seconds)}`;
};


// CHECK IF FORM EMPTY
export const validationForm = (username,password,next) => {
    if(username === '') return {type:'username', message:'Veuillez renseigner un nom de compte.'};
    if(password === '') return {type:'password', message:'Veuillez renseigner un mot de passe.'};
    next();
};

// LOCAL STORAGE ACTIONS
export const useLocalStorage = {
    storage: 'kwickStorage',
    set(name,id,token,date) {
        localStorage.setItem(this.storage,`${name}-${id}-${token}-${date}`);
        return;
    },
    get(next) {
        const stored = localStorage.getItem(this.storage);
        if(stored) return next(stored);
        else return false;
    },
    delete() {
        localStorage.removeItem(this.storage);
    }
};

export const getLocalStorageData = (dataStored) => {
    const data = dataStored.split('-');
    const user_name = data[0];
    const user_id = data[1];
    const token = data[2];
    const tmp = data[3];
    return {user_name,user_id,token,tmp};
};



export const checkAfk = (disconnect) => {
    return setTimeout(disconnect,1200000);
};
