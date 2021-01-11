import React, { useContext, useEffect } from 'react';
import { Context } from '../../context/AuthContext';

import styles from './Form.module.css';

const Form = ({submit,location}) => {

    const { user, handleInput, resetForm, errorMessage } = useContext(Context) ;
    const { user_name, password } = user;
    const { type, message } = errorMessage;

    useEffect(()=> {
        resetForm();
    },[location])

    return (
        <form onSubmit={submit} className={styles.formulaire}>
           
            <div>
                <label htmlFor='user_name' className={styles.label}>Nom de compte </label>
                <input type='text' name='user_name' onChange={handleInput} value={user_name} className={styles.input} placeholder='Nom de compte'
                />
                <p className={styles.error}>{ type === 'username' && message }</p>
            </div>

            <div>
                <label htmlFor='password' className={styles.label}>Mot de passe </label>
                <input type='password' name='password' onChange={handleInput} value={password} className={styles.input} placeholder='Mot de passe'
                />
                <p className={styles.error}>{type === 'password' && message}</p>
            </div>
            
            <button type='submit' className={styles.btn}>Envoyer</button>
        </form>
    );
};

export default Form;
