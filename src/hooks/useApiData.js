import { useEffect, useReducer, useRef } from "react";
import DataReducer, { initialState } from "../reducer/DataReducer";
import { checkAfk, useLocalStorage } from "../utils/utils";

// FETCH MESSAGES AND USERS HOOKS

export const useApiData = (isLogged,serviceUser,serviceMessages,token,isRefreshing,disconnect,user,fetchSinceTimestamp) => {

    const [state,dispatch] = useReducer(DataReducer,initialState);
    const {users,messages} = state;
    const t = useRef();

    const mountedRef = useRef(true)
   
    useEffect(()=> {

        const callApi = async () => {
            try {
                if(!mountedRef) return null;

                // RESET INACTIVITY TIMER EVERY REQUEST
                clearTimeout(t.current);
                
                useLocalStorage.set(user.user_name,user.user_id,user.token,Date.now());
                const [loggedUsers,messagesSent] = await Promise.all([serviceUser(token),serviceMessages(token,(Date.now() - fetchSinceTimestamp)/1000)]);

                dispatch({
                    type:'FETCH_DATA',
                    payload: {
                        users: loggedUsers.data.result.user.map(user => user),
                        messages: messagesSent.data.result.talk.sort((a,b)=> b.timestamp - a.timestamp).map(message => message)
                    }
                });
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

    return [users,messages];


        
};