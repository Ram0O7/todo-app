import React from 'react';
import { useGlobalContext } from './context';

import iconCross from './images/icon-cross.svg';


const List = ({ id, title, checked }) => {
    const data = useGlobalContext();
    const { removeItem, editItem } = data;
    return (
        <li className={`${checked ? 'list-item list-checked' : 'list-item'}`} onClick={() => editItem(id)}>
            <button type="button" className={`${checked ? 'btn checked' : 'btn'}`}> </button>
            <p key={id}>{title}</p>
            {checked && <button type="button" className='toggle-btn cross' onClick={() => removeItem(id)}><img src={iconCross} alt="cross" /></button>}
        </li>
    )
}

export default List;
