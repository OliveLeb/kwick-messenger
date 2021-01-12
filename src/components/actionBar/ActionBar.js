import React, { useContext } from 'react';
import { Context as DataContext } from '../../context/DataContext';
import RefreshBtn from '../RefreshBtn';
import Select from '../Select';

import styles from './ActionBar.module.css';

const ActionBar = ({connectedUser}) => {

    const { refresh, defineTmpLimit, fetchSinceTimestamp } = useContext(DataContext);

    return (
        <section className={styles.container}>
            <span>{connectedUser.user_name}</span>
            <RefreshBtn refresh={refresh} />
            <Select handleInput={defineTmpLimit} fetchSinceTimestamp={fetchSinceTimestamp}/>
        </section>
    )
}

export default ActionBar;
