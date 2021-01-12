import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import styles from './Loading.module.css';

const Loading = () => {
    return (
        <div className={styles.containerSpinner}>
        <AiOutlineLoading3Quarters className={styles.spin}/>
        </div>
    )
}

export default Loading;
