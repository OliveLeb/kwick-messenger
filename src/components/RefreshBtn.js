import React from 'react';
import { GrRefresh } from 'react-icons/gr'

const RefreshBtn = ({refresh}) => {



    return (
        <GrRefresh onClick={refresh}/>
    )
};

export default RefreshBtn;
