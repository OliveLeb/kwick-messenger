import React from 'react';

import styles from './UsersList.module.css'

const UsersList = ({users}) => {
    return (
        <aside className={styles.container}>
            <ul>
                {
                    users.map((user,index) => <li key={index}>{user}</li>)
                }
            </ul>
        </aside>
    )
};

export default UsersList;
