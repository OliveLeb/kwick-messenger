import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Form from '../../components/Form';
import { Context } from '../../context/AuthContext';
import { useApiAuth } from '../../hooks/useApiAuth';
import authService from '../../services/authService';

import './Login.module.css';

const LogIn = () => {

    const { isLogged, submitLogIn, user, handleRememberMe } = useContext(Context) 
    const { user_name, password } = user;

    const [submitForm] = useApiAuth(authService.login,user_name,password,submitLogIn);
  
    if(isLogged) {
        return <Redirect to='/' />;
    }

    return (

        <section>
            <h2>Se Connecter</h2>
            <Form submit={submitForm}/>
            <input type='checkbox' name='rememberme' onChange={handleRememberMe} defaultChecked/>
            <label htmlFor='rememberme'>Se souvenir de moi</label>
        </section>
    );
};

export default LogIn;