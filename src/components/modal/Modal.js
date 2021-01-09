import React from 'react';
import ReactDom from 'react-dom';
import { NavLink } from 'react-router-dom';

import styles from './Modal.module.css';

const Modal = ({open}) => {
    if(!open) return null;

    return ReactDom.createPortal(
        <>
        <section className={styles.overlay}/>
            <div className={styles.modal}>
                <p>Suite à une trop longue inactivité, vous avez été déconnecté.</p>
                Se reconnecter
            </div>
        </>,
        document.getElementById('portal')
    )
};

export default Modal;
