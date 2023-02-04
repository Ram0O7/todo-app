import React from 'react';
import List from './List';
import Listtoggle from './Listtoggle';

const ListContainer = ({ todos, message }) => {

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
            {todos.length === 0 && <p className='alert'>No {message} todos to show...</p>}
            <Listtoggle listCount={todos.length} msg={message} />
        </div>
    )
}

export default ListContainer;
