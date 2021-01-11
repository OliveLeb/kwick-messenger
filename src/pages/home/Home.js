import React, { useContext, useState } from 'react';
import ActionBar from '../../components/actionBar/ActionBar';
import InputMessage from '../../components/inputMessage/InputMessage';
import MessagesList from '../../components/messagesList/MessagesList';
import Modal from '../../components/modal/Modal';
import UsersList from '../../components/usersList/UsersList';
import { Context as AuthContext} from '../../context/AuthContext';
import { Context as DataContext} from '../../context/DataContext';
import { useApiAuth } from '../../hooks/useApiAuth';
import { useApiData } from '../../hooks/useApiData';
import authService from '../../services/authService';
import dataService from '../../services/dataService';
import { useLocalStorage } from '../../utils/utils';

import styles from './Home.module.css';


const Home = () => {

    const { connectedUser,isLogged, logOut } = useContext( AuthContext);
    const {token,user_id} = connectedUser;

    const { isRefreshing,fetchSinceTimestamp } = useContext(DataContext)

    const [isModalOpen, setIsModalOpen] = useState(false);

    // FETCH MESSAGES AND USERS LISTS
    const [users,messages]  = useApiData(isLogged,dataService.getUsers,dataService.getMessages,token,isRefreshing,autoDisconnect,connectedUser,fetchSinceTimestamp);

    // OPEN MODAL AFTER 20 MINUTES OF INACTIVITY AND DISCONNECT USER
    const [submitForm] = useApiAuth(authService.logout,user_id,token);
    function autoDisconnect() {
        setIsModalOpen(true);
        useLocalStorage.delete();
        submitForm();
    };

    const closeModal = () => {
        logOut();
        setIsModalOpen(false);
    };

    return (
        <>
            <ActionBar connectedUser={connectedUser} />
            <section className={styles.container}>                
                <section className={styles.principal}>                    
                    <Modal open={isModalOpen} onClose={closeModal} />
                    <InputMessage token={token} id={user_id} />
                    <MessagesList messages={messages} />
                </section>
                <UsersList users={users} />
            </section>
        </>
    );
};

export default Home;
