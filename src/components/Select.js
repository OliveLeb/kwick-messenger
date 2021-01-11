import React from 'react';

const Select = ({handleInput,fetchSinceTimestamp}) => {
    return (
        <div>
            <label htmlFor='timestamp'>Messages depuis </label>
            <select name='timestamp' onChange={handleInput} value={fetchSinceTimestamp}>
                <option value={21600000}>6h</option>
                <option value={86400000}>24h</option>
                <option value={259200000}>3 jours</option>
                <option value={604800000}>1 semaine</option>
                <option value={604800000*4}>1 mois</option>
                <option value={0}>le début</option>
            </select>
        </div>
    )
};

export default Select;
