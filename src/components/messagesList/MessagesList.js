import React from 'react';
import MessageItem from '../messageItems/MessageItem';

import styles from './MessagesList.module.css';

const MessagesList = ({messages}) => {

    return (
        <section className={styles.container} >
            {messages.length > 0 ?
                <ul>
                {
                    messages.map((item,index) => <MessageItem key={index} message={item}/>)
                }
            </ul>
            : <div className={styles.warning}>Pas de nouveaux messages !</div>
            }
        </section>
    );
};

export default MessagesList;
