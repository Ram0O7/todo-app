import React, { useState, useContext, useEffect } from 'react';

const AppContext = React.createContext();

const getLocalStorage = () => {
    let todoList = JSON.parse(localStorage.getItem("todoList"));
    if (todoList.length >= 1) {
        return todoList;
    }
    return [
        {
            id: 5,
            title: "remove these dummy tasks below to add yours what the fuck is this is right now that its causing so much trouble to me what should i do now",
            checked: true,
        },
        {
            id: 0,
            title: "complete online javascript course",
            checked: false,
        },
        {
            id: 1,
            title: "jog around the park 3x",
            checked: false,
        },
        {
            id: 2,
            title: "read for one hour",
            checked: false,
        },
        {
            id: 3,
            title: "complete your due assignments",
            checked: false,
        },
        {
            id: 4,
            title: "10 minutes meditation",
            checked: false,
        },
    ];
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
            setList([newTodo,...list]);
            setShowList([newTodo,...list]);
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
        setStartMessage("");
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
        setStartMessage("");
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