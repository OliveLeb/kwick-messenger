import React, { useContext } from 'react';
import { Context } from '../../context/OptionContext';

import styles from './UsersList.module.css'

const UsersList = ({users}) => {

    const {toggleMenu} = useContext(Context);

    return (
        <aside className={`${styles.container} ${toggleMenu ? styles.active : null}`} >
            <h2>Utilisateurs connectés</h2>
            <ul>
                {
                    users.map((user,index) => <li key={index}>{user}</li>)
                }
            </ul>
        </aside>
    )
};

export default UsersList;
