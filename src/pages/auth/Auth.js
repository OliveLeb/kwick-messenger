import React, {useContext} from 'react';
import { Redirect, useLocation, NavLink } from 'react-router-dom';
import Form from '../../components/form/Form';
import { Context as AuthContext} from '../../context/AuthContext';
import { useApiAuth } from '../../hooks/useApiAuth';
import authService from '../../services/authService';

import styles from './Auth.module.css'

const Auth = ({req, title}) => {

    const { isLogged, submitLogIn, user, handleErrors } = useContext(AuthContext);
    
    const [submitForm] = useApiAuth(authService[req],user,submitLogIn,null, handleErrors);

    const location = useLocation();
  
    if(isLogged) {
        return <Redirect to='/' />;
    }

    return (
       <section className={styles.container}>
            <h2>{title}</h2>
            <section className={styles.form}>
                <Form submit={submitForm} location={location}/>
            </section>            
            <div className={styles.nav}>
                {   location.pathname ==='/login'
                 ?   <><h3>Pas de compte ?</h3><NavLink to='/signup' className={styles.btn}>Inscris toi !</NavLink></>
                 :  <><h3>Déjà inscrit ?</h3><NavLink to='/login' className={styles.btn}>Connecte toi !</NavLink></>
                }
            </div>
        </section>
    )
}

export default Auth;
