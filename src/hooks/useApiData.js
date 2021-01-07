import { useEffect, useReducer } from "react";
import DataReducer, { initialState } from "../reducer/DataReducer";

export const useApiData = (isLogged,serviceUser,serviceMessages,token) => {

    const [state,dispatch] = useReducer(DataReducer,initialState);
    // console.log(state)
    const {users,messages} = state;

   
    useEffect(()=> {

        const callApi = async () => {
            try {
                const [loggedUsers,messagesSent] = await Promise.all([serviceUser(token),serviceMessages(token,'0')]);
                console.log(loggedUsers,messagesSent);
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

        if(isLogged) callApi();

    },[isLogged]);

    return [users,messages];


        
};