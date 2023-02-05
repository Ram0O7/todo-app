import React from 'react';
import { useGlobalContext } from './context';

import iconCross from './images/icon-cross.svg';
import iconCheck from './images/icon-check.svg';


const List = ({ id, title, checked }) => {
    const data = useGlobalContext();
    const { removeItem, editItem } = data;
    return (
        <li className={`${checked ? 'list-item list-checked' : 'list-item'}`} onClick={() => editItem(id)} key={id}>
            <button type="button" className={`${checked ? 'btn checked' : 'btn'}`}>{checked && <img className='check-img' src={iconCheck} alt="check" />}</button>
            <div id="para"><p>{title}</p></div>
            {checked && <button type="button" className='toggle-btn cross' onClick={() => removeItem(id)}><img src={iconCross} alt="cross" /></button>}
        </li>
    )
}

export default List;
