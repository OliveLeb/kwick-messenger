import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Context as AuthContext} from '../../context/AuthContext';
import { Context as OptionContext} from '../../context/OptionContext';
import DisconnectBtn from '../disconnectBtn/DisconnectBtn';

import { FaBars } from 'react-icons/fa';

import styles from './Nav.module.css';



const Nav = () => {

    const { isLogged } = useContext(AuthContext);
    const {setToggleMenu} = useContext(OptionContext);
    
    return (
        <nav className={styles.nav}>
            <NavLink to='/'><h1>Kwick Messagerie</h1></NavLink>
            {isLogged &&
            <>
                <div className={styles.menuIcon} onClick={()=>setToggleMenu(prevState => !prevState)}>
                    <FaBars />
                </div>
            
                <DisconnectBtn limit={'<'}/>
            </>
            }
        </nav>
    );
};

export default Nav;
