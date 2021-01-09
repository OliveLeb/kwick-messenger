import React, { useContext, useReducer, useState } from 'react';
import InputMessage from '../components/InputMessage';
import MessagesList from '../components/MessagesList';
import Modal from '../components/modal/Modal';
import UsersList from '../components/UsersList';
import { Context as AuthContext} from '../context/AuthContext';
import { useApiData } from '../hooks/useApiData';
import DataReducer, { initialState } from '../reducer/DataReducer';
import dataService from '../services/dataService';
import { checkForAFK } from '../utils/utils';


const Home = () => {

    const { connectedUser,isLogged } = useContext( AuthContext);
    const {token} = connectedUser;
    const [state,dispatch] = useReducer(DataReducer,initialState);
    const {message} = state;

    const [users,messages]  = useApiData(isLogged,dataService.getUsers,dataService.getMessages,token);

    const [isModalOpen, setIsModalOpen] = useState(false);
    if(isLogged) {
        checkForAFK(setIsModalOpen);
        
    }

    return (
        <>
            <section>
                <section>
                    hello {connectedUser.user_name}
                </section>
                <Modal open={isModalOpen}/>
                <InputMessage token={token} id={connectedUser.user_id} dispatch={dispatch} message={message}/>
                <MessagesList messages={messages} />
            </section>
            <UsersList users={users} />
        </>
    );
};

export default Home;
