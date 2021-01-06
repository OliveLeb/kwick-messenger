import React, { useContext } from 'react';
import Form from '../components/Form';
import { Context as AuthContext} from '../context/AuthContext';

const SignUp = () => {

    const { submitRegister } = useContext(AuthContext);

    return (
        <section>
            <h2>S'enregistrer</h2>
            <Form submit={submitRegister}/>
        </section>
    );
};

export default SignUp;
