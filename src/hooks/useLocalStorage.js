const useLocalStorage = (savedUser,token) => {

    if(savedUser) {
        localStorage.setItem('kwicktk',token)
    }
    else {
        localStorage.removeItem('kwicktk')
    }

};

export default useLocalStorage;