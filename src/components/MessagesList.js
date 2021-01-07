import React from 'react';
import MessageItem from './MessageItem';

const MessagesList = ({messages}) => {
    return (
        <section>
            <ul>
                {
                    messages.slice(0,10).map((item,index) => <MessageItem key={index} message={item}/>)
                }
            </ul>
        </section>
    );
};

export default MessagesList;
