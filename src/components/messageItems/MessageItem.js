import React from 'react';
import {formatDate} from '../../utils/utils';

import styles from './MessageItem.module.css'

const MessageItem = ({message}) => {
    
    return (
        <li className={styles.card}>
           <p>{message.user_name}</p>
           <p className={styles.date}>{formatDate(message.timestamp)}</p>
           <p>{message.content}</p>
        </li>
    )
}

export default MessageItem;
