// import {create} from "zustand";
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";

// export const useTodoStore = create((set, get) => ({
//     todos: [],

//     //- Add support for filter tabs;
//     filter: 'All',

//     setFilter: (filter) => {
//         set({ filter });
//     },
    
//     getFilteredTodos: () => {
//         // const { todos, filter } = get();
//         const todos = get().todos;
//         const filter = get().filter;
//         if (filter === 'Active') {
//             return todos.filter((todo) => !todo.isCompleted);
//         } else if (filter === 'Completed') {
//             return todos.filter((todo) => todo.isCompleted);
//         } else {
//             return todos;
//         }
//     },

// //- Change add new todo for unique todo name;
//     addTodo: (label) => {
//         const {todos} = get();

//         const isDuplicate = todos.some((todo) => todo.label === label);

//         if (isDuplicate) {
//             console.log(`Todo with name ${label} already exists`);
//             return;
//         }

//        const newTodo = {
//            id: uuidv4(),
//            label,
//            isCompleted: false
//        }

//        set({
//            todos: [
//                ...todos,
//                newTodo
//            ]
//        })
//     },
//     updateTodo: (todo) => {
//         const {todos} = get();
        
//         const newTodos = todos.map((todoItem) => {
//             if(todo.id === todoItem.id) {
//                 return todo;
//             }

//             return todoItem
//         })

//         set({
//             todos: newTodos
//         })
//     },
//     removeTodoById: (id) => {
//         const {todos} = get();

//         const newTodos = todos.filter((todoItem) => todoItem.id !== id);

//         set({
//             todos: newTodos
//         })
//     },

//     getUncompletedTodos: () => {
//         const {todos} = get();

//         return todos.filter((todoItem) => !todoItem.isCompleted);
//     },
//     isAllCompleted: () => {
//         const {todos} = get();

//         return todos.every(todo => todo.isCompleted);
//     },
//     toggleCompleteAllTodos: (isCompleted) => {
//         const {todos} = get();

//         const newTodos = todos.map((todoItem) => ({...todoItem, isCompleted}));

//         set({
//             todos: newTodos
//         })
//     },
//     clearCompleteAllTodos: () => {
//         const {todos} = get();

//         const newTodos = todos.filter((todoItem) => !todoItem.isCompleted);

//         set({
//             todos: newTodos
//         })
//     }
// }));

export const useTodoStore = () => {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('All');

    const setFilterFunction = (filter) => {
        setFilter(filter);
    }

    const getFilteredTodos = () => {
        if (filter === 'Active') {
            return todos.filter((todo) => !todo.isCompleted);
        } else if (filter === 'Completed') {
            return todos.filter((todo) => todo.isCompleted);
        } else {
            return todos;
        }
    }

    const addTodo = (label) => {

        const isDuplicate = todos.some((todo) => todo.label === label);

        if (isDuplicate) {
            console.log(`Todo with name ${label} already exists`);
            return;
        }

        const newTodo = {
            id: uuidv4(),
            label,
            isCompleted: false
        }

        setTodos([
            ...todos,
            newTodo
        ])
    }

    const updateTodo = (todo) => {

        const newTodos = todos.map((todoItem) => {
            if(todo.id === todoItem.id) {
                return todo;
            }

            return todoItem
        })

        setTodos(newTodos);
    }

    const removeTodoById = (id) => {

        const newTodos = todos.filter((todoItem) => todoItem.id !== id);
        setTodos(newTodos);
    }

    const getUncompletedTodos = () => {
        return todos.filter((todoItem) => !todoItem.isCompleted);
    }

    const isAllCompleted = () => {
        return todos.every(todo => todo.isCompleted);
    }

    const toggleCompleteAllTodos = (isCompleted) => {

        const newTodos = todos.map((todoItem) => ({...todoItem, isCompleted}));
        setTodos(newTodos);
    }

    const clearCompleteAllTodos = () => {
        const newTodos = todos.filter((todoItem) => !todoItem.isCompleted);

        setTodos(newTodos);
    }

    return {
        todos,
        filter,
        setFilter: setFilterFunction,
        getFilteredTodos,
        addTodo,
        updateTodo,
        removeTodoById,
        getUncompletedTodos,
        isAllCompleted,
        toggleCompleteAllTodos,
        clearCompleteAllTodos
    }
}