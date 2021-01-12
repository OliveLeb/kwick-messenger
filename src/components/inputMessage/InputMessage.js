import React, { useContext } from 'react';
import { Context as DataContext} from '../../context/DataContext';
import { Context as OptionContext } from '../../context/OptionContext';
import { useApiAuth } from '../../hooks/useApiAuth';
import dataService from '../../services/dataService';

import styles from './InputMessage.module.css';

const InputMessage = ({connectedUser}) => {

    const {user_id} = connectedUser;
    const { handleInput, message, sendMessage } = useContext(DataContext)

    const [submitForm] = useApiAuth(dataService.postMessage,connectedUser,sendMessage,message.content);

    const {setToggleBtn,toggleBtn} = useContext(OptionContext)

    return (

        <section className={styles.container}>
            <form onSubmit={submitForm}>
                <div>
                    <input type='text' placeholder='Votre message...' onBlur={()=>setToggleBtn(false)} onFocus={()=>setToggleBtn(true)} onChange={handleInput(user_id)} value={message.content} className={styles.input} maxLength="140"/>
                    { (toggleBtn || message.content.length > 0) && <sub>{message.content.length}/140</sub>}
                </div>
                {   (toggleBtn || message.content.length > 0) &&
                    <button type='submit'>Envoyer</button>
                }
                
            </form>
        </section>
    )
};

export default InputMessage;
