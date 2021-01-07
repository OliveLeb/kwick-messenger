import React, { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Context as AuthContext} from '../../context/AuthContext';
import { useApiAuth } from '../../hooks/useApiAuth';
import authService from '../../services/authService';

import './Nav.module.css';

const Nav = () => {

    const { isLogged, logOut, connectedUser } = useContext(AuthContext);
    const { token, user_id } = connectedUser;

    const [submitForm] = useApiAuth(authService.logout,user_id,token,logOut);

    const location = useLocation();
    
    return (
        <nav>
            <NavLink to='/'><h1>Kwick Messagerie</h1></NavLink>
            <ul>
                {isLogged 
                ?   <li onClick={submitForm}>Log Out</li>
                : !isLogged && location.pathname === '/login' 
                ?   <li><NavLink to='/signup'>Sign Up</NavLink></li>
                :   <li><NavLink to='/login'>Log In</NavLink></li>
                }
            </ul>
        </nav>
    );
};

export default Nav;
