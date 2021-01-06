import React, { useContext } from 'react';
import { Context } from '../context/AuthContext';

const Form = ({submit}) => {

    const {user, handleInput} = useContext(Context) ;
    const {user_name, password} = user;


    return (
        <form onSubmit={submit}>
            <label htmlFor='user_name' >User name</label>
            <input type='text' name='user_name' onChange={handleInput} value={user_name}
            />

            <label htmlFor='password' >Password</label>
            <input type='password' name='password' onChange={handleInput} value={password}
            />
            
            <button type='submit'>Envoyer</button>
        </form>
    );
};

export default Form;
