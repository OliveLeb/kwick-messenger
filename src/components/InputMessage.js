import React from 'react';
import { useApiAuth } from '../hooks/useApiAuth';
import dataService from '../services/dataService';

const InputMessage = ({token,id,dispatch,message}) => {

    const [submitForm] = useApiAuth(dataService.postMessage,id,token,null,message.content);

    const handleInput = (e) => {
        dispatch({
            type:'WRITE_MESSAGE',
            payload: {
                user_id: id,
                content: e.target.value
            }
        })
    };

    return (

        <section>
            <form onSubmit={submitForm}>
                <input type='text' placeholder='Votre message...' onChange={handleInput} value={message.content || ''}/>
                <button type='submit'>Envoyer</button>
            </form>
        </section>
    )
};

export default InputMessage;
