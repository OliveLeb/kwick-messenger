import React, { useContext } from 'react';
import { Context as DataContext} from '../../context/DataContext';
import { Context as OptionContext } from '../../context/OptionContext';
import { useApiAuth } from '../../hooks/useApiAuth';
import dataService from '../../services/dataService';

import styles from './InputMessage.module.css';

const InputMessage = ({token,id}) => {

    
    const { handleInput, message } = useContext(DataContext)

    const [submitForm] = useApiAuth(dataService.postMessage,id,token,null,message.content);

    const {setToggleBtn,toggleBtn} = useContext(OptionContext)

    return (

        <section className={styles.container}>
            <form onSubmit={submitForm}>
                <input type='text' placeholder='Votre message...' onBlur={()=>setToggleBtn(false)} onFocus={()=>setToggleBtn(true)} onChange={handleInput(id)} value={message.content} className={styles.input} maxLength="140"/>
                {   toggleBtn &&
                    <button type='submit'>Envoyer</button>
                }
            </form>
        </section>
    )
};

export default InputMessage;
