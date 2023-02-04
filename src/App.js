import React, { useState, useEffect, useRef } from 'react';
import iconSun from './images/icon-sun.svg';
import iconMoon from './images/icon-moon.svg';
import ListContainer from './ListContainer';

import { useGlobalContext } from './context';

const getStorageTheme = () => {
  let theme = 'light-theme';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
};

const App = () => {
  const data = useGlobalContext();
  const { submitHandler, todo, setTodo, showList, startMessage } = data;
  const inputRef = useRef('');

  const [theme, setTheme] = useState(getStorageTheme());
  const [icon, setIcon] = useState(iconSun);
  
  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
    theme === "light-theme" ? setIcon(iconMoon) : setIcon(iconSun);
  }, [theme]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <section className='section-center'>
        <header>
          <h1>todo</h1>
          <img src={icon} alt='dark' onClick={toggleTheme} />
        </header>
        <div className='main-container'>
        <form className='todo-form' onSubmit={submitHandler}>
          <button type='submit' className='btn'></button>
          <input ref={inputRef} type='text' placeholder='Create a new todo...' value={todo} onChange={(e) => setTodo(e.target.value)} />
        </form>
        <ListContainer todos={showList} message={startMessage} />
        </div>
      </section>
    </>
  )
}

export default App;
