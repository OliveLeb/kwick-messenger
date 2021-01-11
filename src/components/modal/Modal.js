import React from 'react';
import ReactDom from 'react-dom';
import { NavLink } from 'react-router-dom';

import styles from './Modal.module.css';

const Modal = ({open, onClose}) => {
    if(!open) return null;

    return ReactDom.createPortal(
        <>
        <section className={styles.overlay}/>
            <div className={styles.modal}>
                <p>Suite à une trop longue inactivité, vous avez été déconnecté.</p>
                <button onClick={onClose}>Ok !</button>
            </div>
        </>,
        document.getElementById('portal')
    )
};

export default Modal;
