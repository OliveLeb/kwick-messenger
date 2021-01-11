import React, { useContext } from 'react';
import { Context as DataContext } from '../context/DataContext';
import RefreshBtn from './RefreshBtn';
import Select from './Select';

const ActionBar = ({connectedUser}) => {

    const { refresh, defineTmpLimit, fetchSinceTimestamp } = useContext(DataContext);

    return (
        <section>
            hello {connectedUser.user_name}
            <RefreshBtn refresh={refresh} />
            <Select handleInput={defineTmpLimit} fetchSinceTimestamp={fetchSinceTimestamp}/>
        </section>
    )
}

export default ActionBar;
