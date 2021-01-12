import React from 'react';
import MessageItem from '../messageItems/MessageItem';

import styles from './MessagesList.module.css';

const MessagesList = ({messages}) => {


    const calcPxToTop = () => {

    }



    return (
        <section className={styles.container} >
            {messages.length > 0 ?
                <ul>
                {
                    messages/*.slice(0,30)*/.map((item,index) => <MessageItem key={index} message={item}/>)
                }
            </ul>
            : <div>Pas de nouveaux messages !</div>
            }
        </section>
    );
};

export default MessagesList;
