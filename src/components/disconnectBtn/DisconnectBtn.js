import React, { useContext, useEffect, useState } from 'react';
import { Context as AuthContext } from '../../context/AuthContext';
import { useApiAuth } from '../../hooks/useApiAuth';
import authService from '../../services/authService';

import styles from './DisconnectBtn.module.css';

const DisconnectBtn = ({limit}) => {

    const { logOut, connectedUser } = useContext(AuthContext)
    const [submitForm] = useApiAuth(authService.logout, connectedUser, logOut);

    const [windowSize, setWindowSize] = useState('');

    useEffect(()=>{

        const handleResize = () => {
            setWindowSize(window.innerWidth);
        };
        handleResize()
        window.addEventListener('resize',handleResize);

        return () => window.removeEventListener('resize',handleResize);
    });
    if(limit === '>') {
        if(windowSize > 960) return null;
    }
    else if(limit === '<'){
        if(windowSize <= 960) return null;
    }
    return (
          
            <button onClick={submitForm} className={styles.logout}>Déconnexion</button>
        
    )
};

export default DisconnectBtn;