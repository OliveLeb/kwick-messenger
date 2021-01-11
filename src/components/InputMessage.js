import React, { useContext } from 'react';
import { Context } from '../context/DataContext';
import { useApiAuth } from '../hooks/useApiAuth';
import dataService from '../services/dataService';

const InputMessage = ({token,id}) => {

    
    const { handleInput, message } = useContext(Context)

    const [submitForm] = useApiAuth(dataService.postMessage,id,token,null,message.content);

    return (

        <section>
            <form onSubmit={submitForm}>
                <input type='text' placeholder='Votre message...' onChange={handleInput(id)} value={message.content} />
                <button type='submit'>Envoyer</button>
            </form>
        </section>
    )
};

export default InputMessage;
