import React, {useContext} from 'react';
import { Redirect } from 'react-router-dom';
import Form from '../../components/form/Form';
import { Context } from '../../context/AuthContext';
import { useApiAuth } from '../../hooks/useApiAuth';
import authService from '../../services/authService';

import styles from './Auth.module.css'

const Auth = ({req, title}) => {

    const { isLogged, submitLogIn, user} = useContext(Context) 
    const { user_name, password } = user;

    const [submitForm,errorMessage] = useApiAuth(authService[req],user_name,password,submitLogIn);
  
    if(isLogged) {
        return <Redirect to='/' />;
    }

    return (
       <section className={styles.container}>
            <h2>{title}</h2>
            <Form submit={submitForm} error={errorMessage}/>
        </section>
    )
}

export default Auth;
