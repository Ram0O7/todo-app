import React from 'react'
// import { useGlobalContext } from './context';

const Listtoggle = ({ listCount }) => {
    // const data = useGlobalContext();

    return (
        <div className='list-item list-toggle'>
            <span>{listCount} items left</span>
            <div className='item-filter'>
                <button type="button" className='remove-btn active'>all</button>
                <button type="button" className='remove-btn'>active</button>
                <button type="button" className='remove-btn'>completed</button>
            </div>
            <button type="button" className='remove-btn'>clear completed</button>
        </div>
    )
}

export default Listtoggle;
