import React, { useContext } from 'react';
import { Context as AuthContext} from '../context/AuthContext';


const Home = () => {

    const { connectedUser } = useContext( AuthContext);

    return (
        <div>
             hello {connectedUser.user_name}
        </div>
    );
};

export default Home;
