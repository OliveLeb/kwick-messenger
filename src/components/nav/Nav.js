import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Context as AuthContext} from '../../context/AuthContext';
import { useApiAuth } from '../../hooks/useApiAuth';
import authService from '../../services/authService';
import { FaBars } from 'react-icons/fa';

import styles from './Nav.module.css';

const Nav = () => {

    const { isLogged, logOut, connectedUser } = useContext(AuthContext);
    const { token, user_id } = connectedUser;

    const [submitForm] = useApiAuth(authService.logout,user_id,token,logOut);
    
    return (
        <nav className={styles.nav}>
            <NavLink to='/'><h1>Kwick Messagerie</h1></NavLink>
            {isLogged &&
            <>
                <div className={styles.menuIcon}>
                <FaBars />
            </div>
            
            <div>
                <NavLink to='/login' onClick={submitForm}>Déconnexion</NavLink>
            </div>
            </>
            }
        </nav>
    );
};

export default Nav;
