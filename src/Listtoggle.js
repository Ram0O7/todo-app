import React from 'react'
import { useGlobalContext } from './context';

const Listtoggle = ({ listCount, msg }) => {
    const data = useGlobalContext();
    const { getTodoStatus } = data;

    return (
        <div className='list-item list-toggle'>
            <span>{listCount} items left</span>
            <div className='item-filter'>
                <button type="button" className={`${msg === "" ? 'toggle-btn active' : 'toggle-btn'}`} onClick={() => getTodoStatus('all')}>all</button>
                <button type="button" className={`${msg === "active" ? 'toggle-btn active' : 'toggle-btn'}`} onClick={() => getTodoStatus('active')}>active</button>
                <button type="button" className={`${msg === "completed" ? 'toggle-btn active' : 'toggle-btn'}`} onClick={() => getTodoStatus('completed')}>completed</button>
            </div>
            <button type="button" className='toggle-btn' onClick={() => getTodoStatus('clear')}>clear completed</button>
        </div>
    )
}

export default Listtoggle;
