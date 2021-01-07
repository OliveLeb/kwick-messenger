import React from 'react';
import {formatDate} from '../utils/utils';

const MessageItem = ({message}) => {
    
    return (
        <li>
           <p>{message.user_name}</p>
           <p>{formatDate(message.timestamp)}</p>
           <p>{message.content} </p>
        </li>
    )
}

export default MessageItem;
