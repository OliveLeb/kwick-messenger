import React, { useContext, useEffect } from 'react';
import { Context } from '../../context/AuthContext';

import styles from './Form.module.css';

const Form = ({submit,error}) => {

    const {user, handleInput, resetForm} = useContext(Context) ;
    const {user_name, password} = user;

    useEffect(()=> {
        resetForm();
    },[])

    return (
        <form onSubmit={submit} className={styles.formulaire}>
           
            <div>
                <label htmlFor='user_name' >Username : </label>
                <input type='text' name='user_name' onChange={handleInput} value={user_name}
                />
                <p className={styles.error}>{ error.type === 'username' && error.message }</p>
            </div>

            <div>
                <label htmlFor='password' >Password : </label>
                <input type='password' name='password' onChange={handleInput} value={password}
                />
                <p className={styles.error}>{error.type === 'password' && error.message}</p>
            </div>
            
            <button type='submit'>Envoyer</button>
        </form>
    );
};

export default Form;
