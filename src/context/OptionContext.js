import { createContext, useState } from "react";

const Context = createContext();

const Provider = ({children}) => {

    const [toggleMenu,setToggleMenu] = useState(false);
    const [toggleBtn, setToggleBtn] = useState(false);


    return (
        <Context.Provider value={{toggleMenu,setToggleMenu,toggleBtn,setToggleBtn}}>
            {children}
        </Context.Provider>
    )
}

export { Context,Provider };