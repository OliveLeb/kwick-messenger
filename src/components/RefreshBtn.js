import React from 'react';
import { GrRefresh } from 'react-icons/gr'

const STYLES_BTN = {
    cursor : 'pointer',
    fontSize: '1.1em'
}

const RefreshBtn = ({refresh}) => {



    return (
        <GrRefresh onClick={refresh} title='Actualiser' style={STYLES_BTN}/>
    )
};

export default RefreshBtn;
