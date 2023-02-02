import React from 'react';
import List from './List';
import Listtoggle from './Listtoggle';
// import { useGlobalContext } from './context';

const ListContainer = ({ todos }) => {
    // const data = useGlobalContext();

    return (
        <div className='container'>
            <ul className='list-container'>
                {todos.map((todo) => {
                    const { id, title, checked } = todo;
                    return (
                        <List id={id}
                            title={title}
                            checked={checked}
                        />
                    )
                })}
            </ul>
            {todos.length > 0 &&
                <Listtoggle listCount={todos.length} />
            }
        </div>
    )
}

export default ListContainer;
