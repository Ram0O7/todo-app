import React, { useState, useContext, useEffect } from 'react';

const AppContext = React.createContext();

const getLocalStorage = () => {
    let todoList = localStorage.getItem("todoList");
    if (todoList) {
        return JSON.parse(todoList);
    } else {
        return [];
    }
};

const AppProvider = ({ children }) => {

    const [todo, setTodo] = useState("");
    const [list, setList] = useState(getLocalStorage());
    const [checked, setChecked] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
        if (todo) {
            const newTodo = { id: new Date().getTime().toString(), title: todo, checked: false };
            setList([...list, newTodo]);
            setTodo("");
        }
    }

    const removeItem = (id) => {
        const newList = list.filter((item) => item.id !== id);
        setList(newList);
    }

    const editItem = (id) => {
        const check = list.find((item) => item.id === id).checked;
        setChecked(!checked);
        list.find((item) => item.id === id).checked = !check;
    }

    useEffect(() => {
        localStorage.setItem('todoList', JSON.stringify(list));
    }, [list]);

    return <AppContext.Provider value={{
        submitHandler,
        todo,
        setTodo,
        list,
        removeItem,
        editItem,
    }}>
        {children}
    </AppContext.Provider>
}
//custom hook
export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };