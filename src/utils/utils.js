export const formatDate = (timestamp) => {

    const frenchDays = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    const frenchMonth = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

    const date = new Date(timestamp * 1000);
    // const day = frenchDays[date.getDay()];
    const day = date.getDay();
    const month = frenchMonth[date.getMonth()];
    const year = date.getFullYear();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const seconds = date.getSeconds();
    return `le ${day} ${month} ${year} à ${hour}:${minute}:${seconds}`;
}