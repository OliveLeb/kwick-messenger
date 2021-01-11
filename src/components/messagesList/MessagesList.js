import React from 'react';
import MessageItem from '../MessageItem';

import styles from './MessagesList.module.css';

const MessagesList = ({messages}) => {
    return (
        <section className={styles.container}>
            <ul>
                {
                    messages.slice(0,30).map((item,index) => <MessageItem key={index} message={item}/>)
                }
            </ul>
        </section>
    );
};

export default MessagesList;
