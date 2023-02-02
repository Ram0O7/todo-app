import React, { useState } from 'react';
import ListContainer from './ListContainer';
import { initialTheme, updatedTheme } from './theme';

import { useGlobalContext } from './context';

// let currentTheme = JSON.parse(localStorage.getItem('theme'));

const App = () => {
  const data = useGlobalContext();
  const { submitHandler, todo, setTodo, showList, startMessage } = data;

  const [theme, setTheme] = useState(initialTheme);

  const { themeIcon, bodyBg, sectionBg, textColor, bgImg, bgImgMobile } = theme;
  // changing custom css styles using root target method
  document.documentElement.style.setProperty('--bg-body', bodyBg);
  document.documentElement.style.setProperty('--bg-section', sectionBg);
  document.documentElement.style.setProperty('--text-color', textColor);
  document.documentElement.style.setProperty('--bg-desktop', bgImg);
  document.documentElement.style.setProperty('--bg-mobile', bgImgMobile);

  const themeHandler = () => {
    if (!theme.changed) {
      setTheme(updatedTheme);
    } else {
      setTheme(initialTheme);
    }
    // localStorage.setItem('theme', JSON.stringify(theme));
  }

  return (
    <>
      <section className='section-center'>
        <header>
          <h1>todo</h1>
          <img src={themeIcon} alt='dark' onClick={themeHandler} />
        </header>
        <div className='main-container'>
        <form className='todo-form' onSubmit={submitHandler}>
          <button type='submit' className='btn'></button>
          <input type='text' placeholder='Create a new todo...' value={todo} onChange={(e) => setTodo(e.target.value)} />
        </form>
        <ListContainer todos={showList} message={startMessage} />
        </div>
      </section>
    </>
  )
}

export default App;
