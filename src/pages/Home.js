import React, { useContext, useReducer } from 'react';
import InputMessage from '../components/InputMessage';
import UsersList from '../components/UsersList';
import { Context as AuthContext} from '../context/AuthContext';
import { useApiData } from '../hooks/useApiData';
import DataReducer, { initialState } from '../reducer/DataReducer';
import dataService from '../services/dataService';


const Home = () => {

    const { connectedUser,isLogged } = useContext( AuthContext);
    const {token} = connectedUser;
    const [state,dispatch] = useReducer(DataReducer,initialState);
    const {message} = state;

    const [users,messages]  = useApiData(isLogged,dataService.getUsers,dataService.getMessages,token);

    return (
        <>
        <section>
             hello {connectedUser.user_name}
        </section>
        <InputMessage token={token} id={connectedUser.user_id} dispatch={dispatch} message={message}/>
        <UsersList users={users} />
        </>
    );
};

export default Home;
