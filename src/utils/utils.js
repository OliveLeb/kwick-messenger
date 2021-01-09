export const formatDate = (timestamp) => {

    // const frenchDays = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    const frenchMonth = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

    const date = new Date(timestamp * 1000);
    const day = date.getDay();
    const month = frenchMonth[date.getMonth()];
    const year = date.getFullYear();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const seconds = date.getSeconds();
    return `le ${day} ${month} ${year} à ${hour}:${minute}:${seconds}`;
};


// CHECK IF FORM EMPTY
export const validationForm = (username,password,next) => {
    if(username === '') return {type:'username', message:'Veuillez renseigner un nom de compte.'};
    if(password === '') return {type:'password', message:'Veuillez renseigner un mot de passe.'};
    next();
}

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
    return {user_name,user_id,token};
};

export const checkForAFK = (open) => {
    let t;
    window.onload = resetTimer;
    window.onmousemove = resetTimer;
    window.onmousedown = resetTimer;  // catches touchscreen presses as well      
    window.ontouchstart = resetTimer; // catches touchscreen swipes as well 
    window.onclick = resetTimer;      // catches touchpad clicks as well
    window.onkeydown = resetTimer;   
    window.addEventListener('scroll', resetTimer, true); // improved; see comments

    function yourFunction() {
        // your function for too long inactivity goes here
        // e.g. window.location.href = 'logout.php';
        // console.log('bonjour')
        return open(true);
    }

    function resetTimer() {
        clearTimeout(t);
        t = setTimeout(yourFunction, 5000); 
    }
};