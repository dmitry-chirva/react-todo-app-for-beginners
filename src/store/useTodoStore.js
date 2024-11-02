import {create} from "zustand";
import { v4 as uuidv4 } from 'uuid';

export const useTodoStore = create((set, get) => ({
    todos: [],
    addTodo: (label) => {
        const {todos} = get();

       const newTodo = {
           id: uuidv4(),
           label,
           isCompleted: false
       }

       set({
           todos: [
               ...todos,
               newTodo
           ]
       })
    },
    updateTodo: (todo) => {
        const {todos} = get();

        const newTodos = todos.map((todoItem) => {
            if(todo.id === todoItem.id) {
                return todo;
            }

            return todoItem
        })

        set({
            todos: newTodos
        })
    },
    removeTodoById: (id) => {
        const {todos} = get();

        const newTodos = todos.filter((todoItem) => todoItem.id !== id);

        set({
            todos: newTodos
        })
    },
    getUncompletedTodos: () => {
        const {todos} = get();

        return todos.filter((todoItem) => !todoItem.isCompleted);
    },
    isAllCompleted: () => {
        const {todos} = get();

        return todos.every(todo => todo.isCompleted);
    },
    toggleCompleteAllTodos: (isCompleted) => {
        const {todos} = get();

        const newTodos = todos.map((todoItem) => ({...todoItem, isCompleted}));

        set({
            todos: newTodos
        })
    },
    clearCompleteAllTodos: () => {
        const {todos} = get();

        const newTodos = todos.filter((todoItem) => !todoItem.isCompleted);

        set({
            todos: newTodos
        })
    }
}));
