import React, { useContext } from 'react';
import { Context as AuthContext } from '../../context/AuthContext';
import {formatDate} from '../../utils/utils';

import styles from './MessageItem.module.css'

const MessageItem = ({message}) => {

    const { connectedUser } = useContext(AuthContext);
    
    return (
        <li className={styles.card}>
           { connectedUser.user_name === message.user_name 
            ?   <p className={styles.authorYourself}>Vous</p>
            :   <p>{message.user_name}</p>
            }
           <p className={styles.date}>{formatDate(message.timestamp)}</p>
           <p>{message.content}</p>
        </li>
    )
}

export default MessageItem;
