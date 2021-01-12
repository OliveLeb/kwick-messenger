import { useContext, useEffect, useRef } from "react";
import { Context as DataContext } from "../context/DataContext";
import { checkAfk, useLocalStorage } from "../utils/utils";

// FETCH MESSAGES AND USERS HOOKS

export const useApiData = (isLogged,serviceUser,serviceMessages,token,isRefreshing,disconnect,user,fetchSinceTimestamp) => {

    const { fetchData, initFetching } = useContext(DataContext);


    const t = useRef();

    const mountedRef = useRef(true)
   
    useEffect(()=> {

        const callApi = async () => {

            initFetching();

            try {
                if(!mountedRef) return null;

                // RESET INACTIVITY TIMER EVERY REQUEST
                clearTimeout(t.current);
                
                useLocalStorage.set(user.user_name,user.user_id,user.token,Date.now());
                const [loggedUsers,messagesSent] = await Promise.all([serviceUser(token),serviceMessages(token,(Date.now() - fetchSinceTimestamp)/1000)]);
                fetchData(loggedUsers,messagesSent);
            }
            catch(err) {
                console.log(err)
            }
    
        }

        if(isLogged){
             callApi();
             t.current = checkAfk(disconnect);
            }

        return () => mountedRef.current = false;

    },[isLogged,mountedRef, isRefreshing,fetchSinceTimestamp]);


        
};