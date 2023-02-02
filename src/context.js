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

    const [startMessage, setStartMessage] = useState("");
    const [todo, setTodo] = useState("");
    const [list, setList] = useState(getLocalStorage());
    const [showList, setShowList] = useState(list);
    const [checked, setChecked] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
        if (todo) {
            const newTodo = { id: new Date().getTime().toString(), title: todo, checked: false };
            setList([...list, newTodo]);
            setShowList([...list, newTodo]);
            setTodo("");
        }
    }

    const getActiveElements = () => {
        const activeTodos = list.filter((item) => item.checked === false);
        setShowList(activeTodos);
        setStartMessage("active")
    }
    const getCompletedElements = () => {
        const completedTodos = list.filter((item) => item.checked === true);
        setShowList(completedTodos);
        setStartMessage("completed");
    }
    const clearCompletedTodos = () => {
        const clearedList = list.filter((item) => item.checked === false);
        setList(clearedList);
        setShowList(clearedList);
    }

    const getTodoStatus = (status) => {
        if (status === 'active') {
            getActiveElements();
        } else if (status === 'completed') {
            getCompletedElements();
        } else if (status === 'clear') {
            clearCompletedTodos();
        } else {
            setShowList(list);
            setStartMessage("");
        }
    }

    const removeItem = (id) => {
        const newList = list.filter((item) => item.id !== id);
        setList(newList);
        setShowList(newList);
    }

    // eslint-disable-next-line
    const editItem = (id) => {
        const check = list.find((item) => item.id === id).checked;
        setChecked(!checked);
        list.find((item) => item.id === id).checked = !check;
    }

    useEffect(() => {
        localStorage.setItem('todoList', JSON.stringify(list));
    }, [list, editItem]);

    return <AppContext.Provider value={{
        submitHandler,
        todo,
        setTodo,
        showList,
        removeItem,
        editItem,
        getTodoStatus,
        startMessage,
    }}>
        {children}
    </AppContext.Provider>
}
//custom hook
export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };